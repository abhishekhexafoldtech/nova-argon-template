<template>
  <div>
    <el-button type="success" @click="dialogVisible = true">View Receipt</el-button>
    <el-dialog v-model="dialogVisible" :before-close="handleClose" :show-close="false" align-center
      class="view_receipt_modal">
      <template #header>
        <div>
          <h4>Hi, {{ dynamicContent.name }}</h4>
          <p>Thanks for your order!</p>
        </div>
        <figure>
          <img :src="Newgas" alt="logo" />
        </figure>
      </template>
      <el-row class="vr_info">
        <el-col :xs="6" :sm="6" :md="4" :lg="4">
          <p>
            <span>Invoice number</span>
            #{{ dynamicContent.orderNumber }}
          </p>
        </el-col>
        <el-col :xs="6" :sm="6" :md="4" :lg="4">
          <p>
            <span>Order ID</span>
            {{ dynamicContent.orderID }}
          </p>
        </el-col>
        <el-col :xs="6" :sm="6" :md="4" :lg="4">
          <p>
            <span>Order date</span>
            {{ dynamicContent.orderDate }}
          </p>
        </el-col>
        <el-col :xs="6" :sm="6" :md="6" :lg="6">
          <p>
            <span>
              Billed from: {{ dynamicContent.billedFrom.name }}
            </span>
            {{ dynamicContent.billedFrom.address }}
          </p>
        </el-col>
        <el-col :xs="6" :sm="6" :md="6" :lg="6">
          <p>
            <span>
              Billed to: {{ dynamicContent.billedTo.name }}
            </span>
            {{ dynamicContent.billedTo.address }}
          </p>
        </el-col>
      </el-row>
      <div class="vr_table">
        <el-table :data="dynamicContent.tableData" :summary-method="getSummaries" show-summary>
          <el-table-column prop="item" width="500" label="ITEM" />
          <el-table-column prop="quantity" label="QUANTITY" />
          <el-table-column prop="price" label="PRODUCT/PRICE" />
        </el-table>
        <p>Payment type:<span>{{ dynamicContent.paymentType }}</span></p>
      </div>

      <template #footer>
        <el-row>
          <el-col :xs="24" :sm="24" :md="10" :lg="10">
            <div class="vr_f_info">
              <h4>Thank you!</h4>
              <p>If you encounter any issues related to the invoice you can contact us at:</p>
              <h5>email:<span>support@nova.com</span></h5>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="14" :lg="14">
            <div class="vr_action">
              <button class="btn btn_email" @click="dialogVisible = false">
                <i class="ri-mail-line"></i>
                Send as Email
              </button>
              <button class="btn btn-primary" @click="generatePDF">
                <i class="ri-download-2-line"></i>
                Download
              </button>
            </div>
          </el-col>
        </el-row>
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

//convert image into base6
const loadImageAndConvertToDataUrl = async (imagePath) => {
  try {
    const response = await fetch(imagePath);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error("Error loading image:", error);
    return null;
  }
};

//generate pdf function
const generatePDF = async () => {
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
  const logoImageDataUrl = await loadImageAndConvertToDataUrl(Newgas);

  // Check if the image loaded successfully
  if (!logoImageDataUrl) {
    console.error("Image loading failed.");
    return;
  }
  const billingContent = [
    {
      columns: [
        {
          text: `Invoice for ${dynamicContent.name}`,
          style: "header",
        },
        {
          image: logoImageDataUrl, // Replace with the path to your logo image
          width: 50, // Adjust the width of the image as needed
          height: 50, // Adjust the height of the image as needed
          alignment: "right",
          margin: [0, 10, 0, 0], // Adjust margins as needed
        },
      ],
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
    //here is table of contents
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
    //here is seperate table of booter
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

<style scoped lang="scss"></style>