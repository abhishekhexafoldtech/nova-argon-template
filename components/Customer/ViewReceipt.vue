<template>
  <div>
    <el-button type="success" @click="dialogVisible = true"
      >View Receipt</el-button
    >
    <el-dialog
      style="border: 1px; border-radius: 15px"
      v-model="dialogVisible"
      width="57%"
      close-icon
      :before-close="handleClose"
    >
      <template #header>
        <div class="main-section m-auto">
          <div class="top-section d-flex justify-content-between">
            <div>
              <div class="header-text">Hi, {{ dynamicContent.name }}</div>
              <div class="header-text-small">Thanks for your order!</div>
            </div>
            <div class="logo">
              <img class="img-fluid" width="100" :src="Newgas" alt="logo" />
            </div>
          </div>
          <hr class="mt-4 mb-4 w-85 m-auto" />
          <el-row>
            <el-col :xs="4" :sm="4" :md="4" :lg="4">
              <div class="info-text ms-2">
                <div class="info-label">Invoice number</div>
                <div class="info-value">#{{ dynamicContent.orderNumber }}</div>
              </div>
            </el-col>
            <el-col :xs="4" :sm="4" :md="3" :lg="3">
              <div class="info-text">
                <div class="info-label">Order ID</div>
                <div class="info-value">{{ dynamicContent.orderID }}</div>
              </div>
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4">
              <div class="info-text">
                <div class="info-label">Order date</div>
                <div class="info-value">{{ dynamicContent.orderDate }}</div>
              </div>
            </el-col>
            <el-col :xs="4" :sm="4" :md="7" :lg="7">
              <div class="info-text">
                <div class="info-label">
                  Billed from: {{ dynamicContent.billedFrom.name }}
                </div>
                <div class="info-value">
                  {{ dynamicContent.billedFrom.address }}
                </div>
              </div>
            </el-col>
            <el-col :xs="4" :sm="4" :md="6" :lg="6">
              <div class="info-text ms-2">
                <div class="info-label">
                  Billed to: {{ dynamicContent.billedTo.name }}
                </div>
                <div class="info-value">
                  {{ dynamicContent.billedTo.address }}
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col class="m-auto mt-5" :xs="20" :sm="20" :md="20" :lg="20">
              <el-table
                :data="dynamicContent.tableData"
                height="180"
                :summary-method="getSummaries"
                show-summary
                style="width: 100%; margin-top: 20px"
              >
                <el-table-column prop="item" label="ITEM" width="400" />
                <el-table-column prop="quantity" label="QUANTITY" />
                <el-table-column prop="price" label="PRODUCT/PRICE" />
              </el-table>
            </el-col>
            <el-col>
              <div class="bank">
                <span class="p_type"> Payment type: </span
                ><span class="bank_card">{{ dynamicContent.paymentType }}</span>
              </div>
            </el-col>
          </el-row>
        </div>
      </template>

      <template #footer>
        <div class="ms-6">
          <div
            style="
              width: 100%;
              text-align: left;
              color: black;
              font-size: 20px;
              font-family: Montserrat;
              font-weight: 600;
              line-height: 27.4px;
              word-wrap: break-word;
            "
          >
            Thank you!
          </div>
          <div
            style="
              width: 100%;
              text-align: left;
              color: #7b809a;
              font-size: 14px;
              font-family: Montserrat;
              font-weight: 400;
              line-height: 21px;
              word-wrap: break-word;
            "
          >
            If you encounter any issues related to the invoice you can contact
            us at:
          </div>
          <div style="width: 100%; text-align: left">
            <span
              style="
                color: #7b809a;
                font-size: 16px;
                font-family: Montserrat;
                font-weight: 600;
                line-height: 26px;
                word-wrap: break-word;
              "
              >email:</span
            ><span
              style="
                color: #172b4d;
                font-size: 16px;
                font-family: Montserrat;
                font-weight: 600;
                line-height: 26px;
                word-wrap: break-word;
              "
            >
            </span
            ><span
              style="
                color: black;
                font-size: 16px;
                font-family: Montserrat;
                font-weight: 600;
                line-height: 26px;
                word-wrap: break-word;
              "
              >support@nova.com</span
            >
          </div>
        </div>
        <span class="dialog-footer">
          <el-button class="btn" @click="dialogVisible = false">
            <img :src="Email" alt="email" />
            <span class="ms-1">Send as Email</span>
          </el-button>
          <el-button class="btn bg-success text-white" @click="generatePDF"
            ><img :src="Download" alt="img" /><span class="ms-1"
              >Download</span
            ></el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElMessageBox } from "element-plus";
import Email from "@/assets/svg/email.svg";
import Download from "@/assets/svg/download.svg";
import Newgas from "@/assets/svg/newgas.png";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

const dialogVisible = ref(false);

// Define your dynamic content
const dynamicContent = {
  name: "Yaw Graham",
  orderNumber: "41233",
  orderID: "101",
  orderDate: "2023/12/15",
  billedFrom: {
    name: "Derrick Graham",
    address: "Agbogba-ashongman\nroad, Ghana\nNorthern zone",
  },
  billedTo: {
    name: "Yaw Graham",
    address: "Agbogba-ashongman\nroad, Ghana\nNorthern zone",
  },
  tableData: [
    { item: "3kg Steel cylinder", quantity: "01", price: " 50" },
    { item: "6kg Steel cylinder", quantity: "02", price: " 40" },
    { item: "6kg Steel cylinder", quantity: "01", price: " 30" },
    { item: "Delivery charge", quantity: "01", price: " 25" },
    // Add more dummy data rows as needed
  ],
  paymentType: "Bank card",
};

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const generatePDF = () => {
  const pdfStyles = {
    header: {
      fontSize: "20",
    },
    headerText: {},
    headerTextSmall: {},
    infoLabel: {},
    infoValue: {},
    // Add more styles as needed
  };

  const billingContent = [
    {
      text: `Invoice for ${dynamicContent.name}`,
      style: "header",
    },
    {
      // image:Newgas, // Replace with the path to your logo image
      // width: 100, // Adjust the width of the image as needed
      // height: 100, // Adjust the height of the image as needed
      // alignment: "right",
      // margin: [0, 10, 0, 0], // Adjust margins as needed
    },
    {
      columns: [
        {
          text: `Invoice number:`,
          margin: [0, 0],
        },
        {
          text: `Order ID:`,
          margin: [0, 0],
        },
        {
          text: `Order Date:`,
          margin: [0, 0],
        },
        {
          text: `Billed from: ${dynamicContent.billedFrom.name}`,
          margin: [0, 0],
        },
        {
          text: `Billed To: ${dynamicContent.billedTo.name}`,
          margin: [0, 5],
        },
      ],
    },
    {
      columns: [
        {
          text: ` ${dynamicContent.orderNumber}`,
          margin: [0, 0],
        },
        {
          text: ` ${dynamicContent.orderID}`,
          margin: [0, 0],
        },
        {
          text: `${dynamicContent.orderDate}`,
          margin: [0, 0],
        },
        {
          text: dynamicContent.billedFrom.address,
          margin: [0, 0],
        },
        {
          text: dynamicContent.billedTo.address,
          margin: [0, 0],
        },
      ],
    },
    // {
    //   text: "Items:",
    //   style: "infoLabel",
    //   margin: [0, 15, 0, 0],
    // },
    {
      table: {
        widths: ["*", "*", "*"], // Adjust the column widths as needed
        body: [
          [
            { text: "Item", style: "tableHeader" },
            { text: "Quantity", style: "tableHeader" },
            { text: "Price", style: "tableHeader" },
          ],
          ...dynamicContent.tableData.map((item) => [
            item.item,
            item.quantity,
            item.price,
          ]),
        ],
      },
      layout: "lightHorizontalLines", // You can adjust the table layout as needed
    },
    {
      columns: [
        {
          table: {
            widths: ["*", "*", "*"],
            body: [
              [
                { text: "Total", style: "tablefoter" },
                {
                  text: `${dynamicContent.tableData
                    .reduce((total, item) => total + parseInt(item.quantity), 0)
                    .toString()}`,
                  style: "tablefoter",
                },
                {
                  text: `GHs ${dynamicContent.tableData
                    .reduce((total, item) => total + parseFloat(item.price), 0)
                    .toFixed(2)}`,
                  style: "tablefoter",
                },
              ],
            ],
          },
          // alignment: "center",
        },
      ],
    },

    {
      text: `Payment Type: ${dynamicContent.paymentType}`,
      style: "infoLabel",
      margin: [0, 15, 0, 0],
    },
    {
      text: "Thank you!",
      style: "thankYou",
    },
    {
      text: "If you encounter any issues related to the invoice, you can contact us at:",
      style: "contactInfoLabel",
    },
    {
      text: "email: support@nova.com",
    },
  ];
  const pdfDefinition = {
    content: billingContent,
    styles: pdfStyles,
  };

  const pdfDoc = pdfMake.createPdf(pdfDefinition);
  pdfDoc.open();
};

const getSummaries = (param) => {
  const { columns, data } = param;
  const sums = [];

  columns.forEach((column, index) => {
    if (index === 0) {
      sums[index] = "Total";
      return;
    }
    const values = data.map((item) => Number(item[column.property]));

    if (!values.every((value) => Number.isNaN(value))) {
      const sum = values.reduce((prev, curr) => {
        const value = Number(curr);
        if (!isNaN(value)) {
          return prev + value;
        } else {
          return prev;
        }
      }, 0);

      const formattedSum = sum < 10 ? "0" + sum.toString() : sum.toString();
      sums[2] = "GHs " + formattedSum;
      sums[1] = formattedSum;
    }
  });

  return sums;
};

const handleClose = (done) => {
  done();
};
</script>

<style scoped>
/* Global styles for the entire component */
.dialog-footer button:first-child {
  margin-right: 10px;
}

/* Header styles */
.header-text {
  text-align: right;
  color: black;
  font-size: 30px;
  font-family: Montserrat;
  font-weight: 600;
  line-height: 48.75px;
  word-wrap: break-word;
}

.header-text-small {
  text-align: left;
  color: black;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 400;
  line-height: 26px;
  word-wrap: break-word;
}

/* Info styles */
.info-text {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 11px;
  display: inline-flex;
}

.info-label {
  color: black;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 600;
  line-height: 26px;
  word-wrap: break-word;
}

.info-value {
  color: black;
  font-size: 12px;
  font-family: Montserrat;
  font-weight: 400;
  line-height: 17px;
  word-wrap: break-word;
}

/* Add more styles for other elements as needed */
.top-section {
  display: flex;
  justify-content: space-between;
}

.logo img {
  width: 100px;
}
.bank {
  margin-top: 40px;
  margin-left: 68px;
}
.p_type {
  color: #7b809a;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 400;
  line-height: 21px;
  word-wrap: " break-word";
}
.bank_card {
  color: black;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 21px;
  word-wrap: "break-word";
}
</style>
