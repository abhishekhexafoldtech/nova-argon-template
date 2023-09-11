export const tableConfig = {
    allCustomers: [
        {
            label: "ID",
            width: "70",
            sortable: true,
            prop: "id"
        },
        {
            label: "Customer Name",
            width: "250",
            sortable: true,
            prop: "name"
        },
        {
            label: "Zone",
            width: "90",
            sortable: true,
            prop: "zone"
        },
        {
            label: "Email",
            width: "200",
            sortable: true,
            prop: "email"
        },
        {
            label: "Phone Number",
            width: "160",
            sortable: true,
            prop: "phone"
        },
        {
            label: "Latest Order",
            width: "200",
            sortable: true,
            prop: "latest_order"
        },
        {
            label: "Status",
            width: "100",
            sortable: true,
            prop: "status"
        },
        {
            label: "Distributor Name",
            width: "180",
            sortable: true,
            prop: "distributor_name"
        },
        {
            label: "Join Date",
            width: "120",
            sortable: true,
            prop: "join_date"
        }
    ],
    latestOrders: [
        {
            label: "ID",
            sortable: true,
            prop: "id"
        },
        {
            label: "Customer Name",
            sortable: true,
            prop: "name"
        },
        {
            label: "Zone",
            sortable: true,
            prop: "zone"
        },
        {
            label: "Distributor Name",
            sortable: true,
            prop: "distributor_name"
        },
        {
            label: "Order ID",
            sortable: true,
            prop: "order_id"
        },
        {
            label: "Product Order",
            sortable: true,
            prop: "product_order"
        },
        {
            label: "Order Date",
            sortable: true,
            prop: "order_date"
        },
        {
            label: "Total Amount",
            sortable: true,
            prop: "total_amount"
        },
        {
            label: "Status",
            sortable: true,
            prop: "order_status"
        }
    ],
    complaints:[
        {
            label: "Complaint No",
            sortable: true,
            prop: "complaint_no"
        },
        {
            label: "Date",
            sortable: true,
            prop: "date"
        },
        {
            label: "Customer Id",
            sortable: true,
            prop: "id"
        },
        {
            label: "Customer Name",
            sortable: true,
            prop: "name"
        },
        {
            label: "Zone",
            sortable: true,
            prop: "zone"
        },
        {
            label: "Order ID",
            sortable: true,
            prop: "order_id"
        },
        {
            label: "Type Of Company",
            sortable: true,
            prop: "type_of_complaint"
        },
        {
            label: "Status",
            sortable: true,
            prop: "complaint_status"
        },
        {
            label: "Case Priority",
            sortable: true,
            prop: "case_priority"
        },
    ]
}

export const complaints = [
    {
        id: "101",
        name: [
            {
                content: "Yaw Graham",
                url: "https://media-protected.taiga.io/user/4/c/d/a/ac26fb36644c6ec80b1087044c4bc7e1413dd7e52cc85402c553fb6732dd/20230302-150121__01.jpg.80x80_q85_crop.jpg?token=ZPA1Hg%3AjXRLPPMtdgE6o9p1Iwf-JI416zt0CGJZPRwaT09gy6UKmdUZQ3lHoJZY-g7KL5c49hNX14-1f0wDF55CGwGlYQ"
            }
        ],
        zone: "Northen",
        status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
        date: "2023/12/05",
        order_id: "AA1234",
        complaint_status:  "Resolved",
        complaint_no : "c101",
        type_of_complaint : "Delay delivery",
        case_priority : "High"
    },
    {
        id: "102",
        name: [
            {
                content: "Derric Nwafor",
                url: "https://media-protected.taiga.io/user/7/2/b/4/9c555ae1e899ce44226fe047f35b335c8b9a5eb2f4a9f2a88b7e11f7f94f/screenshot-from-2023-08-01-13-09-06.png.80x80_q85_crop.png?token=ZPWduw%3AHt2c_-zicEBW4lR8ax6HwyRMAdL7j3gAu8rkYBRGPDNhUVJt-065NN6zeGBr7LbgdkhIWIaSo26B6uF6qIrR4A"
            }
        ],
        zone: "Northen",
        date: "2023/08/05",
        order_id: "AA1234",
        complaint_status:"Unresolved",
        complaint_no : "c102",
        type_of_complaint : "Delay delivery",
        case_priority : "High"
    },
    {
        id: "103",
        name: [
            {
                content: "KamalDev Sulley Graham",
                url: "https://media-protected.taiga.io/user/5/d/7/f/713e2adb889ba0288eaeaf6870ffb74a362c332eb5b39565b2f117080184/16726594728082.jpg.80x80_q85_crop.jpg?token=ZPWduw%3AjIh95FjQ16kdytndf_4eiLbIVnCDGtPFWvxrwxS8jgydMUyBGnqTeNNt5pB1zXp7RwFLd2zm5FIrhmjSPsK9Sw"
            }
        ],
        zone: "Western",
        date: "2023/08/05",
        order_id: "AA1234",
        complaint_status: "Resolved",
        complaint_no : "c103",
        type_of_complaint : "Delay delivery",
        case_priority : "High"
    },
    {
        id: "104",
        name: [
            {
                content: "Yaw Boafo",
                url: "https://media-protected.taiga.io/user/1/0/d/1/1c44b04b9bd7fe88fdd8805a74ab15eef6a39cdd13231d06a5eff65ff83e/passport_photo_priyanka_adik.jpg.80x80_q85_crop.jpg?token=ZPWduw%3AxEqle-pWp5TB7zVhmJuWdaryTkGssxAJomZq1E6C2Ydodvi0eTApmRjPN9oFEFeqqy0y0Mp6DhO6wHLhkdbROg"
            }
        ],
        zone: "Northen",
        date: "2023/12/05",
        order_id: "AA1234",
        complaint_status: "Unresolves",
        complaint_no : "c104",
        type_of_complaint : "Delay delivery",
        case_priority : "High"
    },
]
export const latestOrders = [
    {
        id: "101",
        name: [
            {
                content: "Yaw Graham",
                url: "https://media-protected.taiga.io/user/4/c/d/a/ac26fb36644c6ec80b1087044c4bc7e1413dd7e52cc85402c553fb6732dd/20230302-150121__01.jpg.80x80_q85_crop.jpg?token=ZPA1Hg%3AjXRLPPMtdgE6o9p1Iwf-JI416zt0CGJZPRwaT09gy6UKmdUZQ3lHoJZY-g7KL5c49hNX14-1f0wDF55CGwGlYQ"
            }
        ],
        zone: "Northen",
        product_order: "3kg|steel,6kg|steel(2)",
        distributor_name: [
            {
                content: "Yaw Graham",
                url: "https://media-protected.taiga.io/user/4/c/d/a/ac26fb36644c6ec80b1087044c4bc7e1413dd7e52cc85402c553fb6732dd/20230302-150121__01.jpg.80x80_q85_crop.jpg?token=ZPA1Hg%3AjXRLPPMtdgE6o9p1Iwf-JI416zt0CGJZPRwaT09gy6UKmdUZQ3lHoJZY-g7KL5c49hNX14-1f0wDF55CGwGlYQ"
            }
        ],
        status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
        order_date: "2023/12/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    },
    {
        id: "102",
        name: [
            {
                content: "Derric Nwafor",
                url: "https://media-protected.taiga.io/user/7/2/b/4/9c555ae1e899ce44226fe047f35b335c8b9a5eb2f4a9f2a88b7e11f7f94f/screenshot-from-2023-08-01-13-09-06.png.80x80_q85_crop.png?token=ZPWduw%3AHt2c_-zicEBW4lR8ax6HwyRMAdL7j3gAu8rkYBRGPDNhUVJt-065NN6zeGBr7LbgdkhIWIaSo26B6uF6qIrR4A"
            }
        ],
        zone: "Northen",
        product_order: "12kg|comp,6kg|comp(2)",
        distributor_name: [
            {
                content: "Derric Nwafor",
                url: "https://media-protected.taiga.io/user/7/2/b/4/9c555ae1e899ce44226fe047f35b335c8b9a5eb2f4a9f2a88b7e11f7f94f/screenshot-from-2023-08-01-13-09-06.png.80x80_q85_crop.png?token=ZPWduw%3AHt2c_-zicEBW4lR8ax6HwyRMAdL7j3gAu8rkYBRGPDNhUVJt-065NN6zeGBr7LbgdkhIWIaSo26B6uF6qIrR4A"
            }
        ],
        order_date: "2023/08/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    },
    {
        id: "103",
        name: [
            {
                content: "KamalDev Sulley Graham",
                url: "https://media-protected.taiga.io/user/5/d/7/f/713e2adb889ba0288eaeaf6870ffb74a362c332eb5b39565b2f117080184/16726594728082.jpg.80x80_q85_crop.jpg?token=ZPWduw%3AjIh95FjQ16kdytndf_4eiLbIVnCDGtPFWvxrwxS8jgydMUyBGnqTeNNt5pB1zXp7RwFLd2zm5FIrhmjSPsK9Sw"
            }
        ],
        zone: "Western",
        product_order: "3kg|steel(2),6kg|steel(2)",
        distributor_name: [
            {
                content: "KamalDev Sulley Graham",
                url: "https://media-protected.taiga.io/user/5/d/7/f/713e2adb889ba0288eaeaf6870ffb74a362c332eb5b39565b2f117080184/16726594728082.jpg.80x80_q85_crop.jpg?token=ZPWduw%3AjIh95FjQ16kdytndf_4eiLbIVnCDGtPFWvxrwxS8jgydMUyBGnqTeNNt5pB1zXp7RwFLd2zm5FIrhmjSPsK9Sw"
            }
        ],
        order_date: "2023/08/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    },
    {
        id: "104",
        name: [
            {
                content: "Yaw Boafo",
                url: "https://media-protected.taiga.io/user/1/0/d/1/1c44b04b9bd7fe88fdd8805a74ab15eef6a39cdd13231d06a5eff65ff83e/passport_photo_priyanka_adik.jpg.80x80_q85_crop.jpg?token=ZPWduw%3AxEqle-pWp5TB7zVhmJuWdaryTkGssxAJomZq1E6C2Ydodvi0eTApmRjPN9oFEFeqqy0y0Mp6DhO6wHLhkdbROg"
            }
        ],
        zone: "Northen",
        product_order: "3kg|steel,6kg|steel(2)",
        distributor_name: [
            {
                content: "Yaw Boafo",
                url: "https://media-protected.taiga.io/user/1/0/d/1/1c44b04b9bd7fe88fdd8805a74ab15eef6a39cdd13231d06a5eff65ff83e/passport_photo_priyanka_adik.jpg.80x80_q85_crop.jpg?token=ZPWduw%3AxEqle-pWp5TB7zVhmJuWdaryTkGssxAJomZq1E6C2Ydodvi0eTApmRjPN9oFEFeqqy0y0Mp6DhO6wHLhkdbROg"
            }
        ],
        order_date: "2023/12/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    },
    {
        id: "105",
        name: [
            {
                content: "Dziedzorm Doe",
                url: "https://media-protected.taiga.io/user/4/c/d/a/ac26fb36644c6ec80b1087044c4bc7e1413dd7e52cc85402c553fb6732dd/20230302-150121__01.jpg.80x80_q85_crop.jpg?token=ZPA1Hg%3AjXRLPPMtdgE6o9p1Iwf-JI416zt0CGJZPRwaT09gy6UKmdUZQ3lHoJZY-g7KL5c49hNX14-1f0wDF55CGwGlYQ"
            }
        ],
        zone: "Northen",
        product_order: "12kg|comp,6kg|comp(2)",
        distributor_name: [
            {
                content: "Dziedzorm Doe",
                url: "https://media-protected.taiga.io/user/4/c/d/a/ac26fb36644c6ec80b1087044c4bc7e1413dd7e52cc85402c553fb6732dd/20230302-150121__01.jpg.80x80_q85_crop.jpg?token=ZPA1Hg%3AjXRLPPMtdgE6o9p1Iwf-JI416zt0CGJZPRwaT09gy6UKmdUZQ3lHoJZY-g7KL5c49hNX14-1f0wDF55CGwGlYQ"
            }
        ],
        order_date: "2023/08/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    },
    {
        id: "106",
        name: [
            {
                content: "Yaw Boafo",
                url: "https://media-protected.taiga.io/user/5/b/3/a/4a4afa6630ec7fbb4e3382dd8893131c3dfdaed06c450c16fbb5b1f65455/employee_logo_352e9deb1f444b65bcff41f0f287e78e787311.png.80x80_q85_crop.png?token=ZPWduw%3AainT12BQkbIqpNf5Sx-tCAKa9Ft7uXR4vTxX3dbajsy9rFJRnTOjK-KfiVGtHisTNVsMWpEY5wYnNeJUObQIWQ"
            }
        ],
        zone: "Western",
        product_order: "3kg|steel(2),6kg|steel(2)",
        distributor_name: [
            {
                content: "Yaw Boafo",
                url: "https://media-protected.taiga.io/user/5/b/3/a/4a4afa6630ec7fbb4e3382dd8893131c3dfdaed06c450c16fbb5b1f65455/employee_logo_352e9deb1f444b65bcff41f0f287e78e787311.png.80x80_q85_crop.png?token=ZPWduw%3AainT12BQkbIqpNf5Sx-tCAKa9Ft7uXR4vTxX3dbajsy9rFJRnTOjK-KfiVGtHisTNVsMWpEY5wYnNeJUObQIWQ"
            }
        ],
        order_date: "2023/08/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    },
    {
        id: "107",
        name: [
            {
                content: "Kamal Deen",
                url: "https://media-protected.taiga.io/user/0/f/f/5/7bad725ed2e262fa802a6fdac45b73b8056d069a01e8eb47a58715cc8594/2c2edf69-9877-43cc-9cd8-2ad6f878dffe.jpg.80x80_q85_crop.jpg?token=ZPWduw%3Ascco_CtW0jX1X6dtk2lVNdLp8jClr0fKFNQxkwg199W29WleKc5mk5E6bHu5c5r_2vkMqIQFxyhmeEuQ8cWrsg"
            }
        ],
        zone: "Northen",
        product_order: "3kg|steel,6kg|steel(2)",
        distributor_name: [
            {
                content: "Kamal Deen",
                url: "https://media-protected.taiga.io/user/0/f/f/5/7bad725ed2e262fa802a6fdac45b73b8056d069a01e8eb47a58715cc8594/2c2edf69-9877-43cc-9cd8-2ad6f878dffe.jpg.80x80_q85_crop.jpg?token=ZPWduw%3Ascco_CtW0jX1X6dtk2lVNdLp8jClr0fKFNQxkwg199W29WleKc5mk5E6bHu5c5r_2vkMqIQFxyhmeEuQ8cWrsg"
            }
        ],
        order_date: "2023/12/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    },
    {
        id: "108",
        name: [
            {
                content: "Derric Nwafor",
                url: "https://media-protected.taiga.io/user/1/f/b/5/06c64256092272a9e02af953f7bcda0e97a01a73d84cf252f29300464ecd/img_20230109_100352_149.jpg.80x80_q85_crop.jpg?token=ZPWduw%3AU7UZVLykf9m8cXnTXY7-FbvQYDFH-ioFAD6FZ1KtS_KZJy1hkd4jLVW7qgG1FnVZKf_PqEeBt10uZ_N6mCiesA"
            }
        ],
        zone: "Northen",
        product_order: "12kg|comp,6kg|comp(2)",
        distributor_name: [
            {
                content: "Derric Nwafor",
                url: "https://media-protected.taiga.io/user/1/f/b/5/06c64256092272a9e02af953f7bcda0e97a01a73d84cf252f29300464ecd/img_20230109_100352_149.jpg.80x80_q85_crop.jpg?token=ZPWduw%3AU7UZVLykf9m8cXnTXY7-FbvQYDFH-ioFAD6FZ1KtS_KZJy1hkd4jLVW7qgG1FnVZKf_PqEeBt10uZ_N6mCiesA"
            }
        ],
        order_date: "2023/08/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    },
    {
        id: "109",
        name: [
            {
                content: "KamalDev Sulley Graham",
                url: "https://media-protected.taiga.io/user/f/0/c/f/44310b7f150ee54b3ead22f4c0e2f3ec1a74ad415152ef32d132e3412506/vishal_image.jpg.80x80_q85_crop.jpg?token=ZPWduw%3A2-WfirFBTncQe_L1fDVXraFDMaEK4AxM3Kh8TyYE1Qv5RxHOEZH-S4yp0tTWLykusLqsGAGMxO082noDnSXtRQ"
            }
        ],
        zone: "Western",
        product_order: "3kg|steel(2),6kg|steel(2)",
        distributor_name: [
            {
                content: "KamalDev Sulley Graham",
                url: "https://media-protected.taiga.io/user/f/0/c/f/44310b7f150ee54b3ead22f4c0e2f3ec1a74ad415152ef32d132e3412506/vishal_image.jpg.80x80_q85_crop.jpg?token=ZPWduw%3A2-WfirFBTncQe_L1fDVXraFDMaEK4AxM3Kh8TyYE1Qv5RxHOEZH-S4yp0tTWLykusLqsGAGMxO082noDnSXtRQ"
            }
        ],
        order_date: "2023/08/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    },
    {
        id: "110",
        name: [
            {
                content: "Derric Nwafor",
                url: "https://media-protected.taiga.io/user/7/2/b/4/9c555ae1e899ce44226fe047f35b335c8b9a5eb2f4a9f2a88b7e11f7f94f/screenshot-from-2023-08-01-13-09-06.png.80x80_q85_crop.png?token=ZPWduw%3AHt2c_-zicEBW4lR8ax6HwyRMAdL7j3gAu8rkYBRGPDNhUVJt-065NN6zeGBr7LbgdkhIWIaSo26B6uF6qIrR4A"
            }
        ],
        zone: "Northen",
        product_order: "3kg|steel,6kg|steel(2)",
        distributor_name: [
            {
                content: "Derric Nwafor",
                url: "https://media-protected.taiga.io/user/7/2/b/4/9c555ae1e899ce44226fe047f35b335c8b9a5eb2f4a9f2a88b7e11f7f94f/screenshot-from-2023-08-01-13-09-06.png.80x80_q85_crop.png?token=ZPWduw%3AHt2c_-zicEBW4lR8ax6HwyRMAdL7j3gAu8rkYBRGPDNhUVJt-065NN6zeGBr7LbgdkhIWIaSo26B6uF6qIrR4A"
            }
        ],
        order_date: "2023/12/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    },
    {
        id: "111",
        name: [
            {
                content: "Kamal Deen",
                url: "https://media-protected.taiga.io/user/1/f/b/5/06c64256092272a9e02af953f7bcda0e97a01a73d84cf252f29300464ecd/img_20230109_100352_149.jpg.80x80_q85_crop.jpg?token=ZPWduw%3AU7UZVLykf9m8cXnTXY7-FbvQYDFH-ioFAD6FZ1KtS_KZJy1hkd4jLVW7qgG1FnVZKf_PqEeBt10uZ_N6mCiesA"
            }
        ],
        zone: "Northen",
        product_order: "12kg|comp,6kg|comp(2)",
        distributor_name: [
            {
                content: "Kamal Deen",
                url: "https://media-protected.taiga.io/user/1/f/b/5/06c64256092272a9e02af953f7bcda0e97a01a73d84cf252f29300464ecd/img_20230109_100352_149.jpg.80x80_q85_crop.jpg?token=ZPWduw%3AU7UZVLykf9m8cXnTXY7-FbvQYDFH-ioFAD6FZ1KtS_KZJy1hkd4jLVW7qgG1FnVZKf_PqEeBt10uZ_N6mCiesA"
            }
        ],
        order_date: "2023/08/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    },
    {
        id: "112",
        name: [
            {
                content: "Kamal Deen",
                url: "https://media-protected.taiga.io/user/4/c/d/a/ac26fb36644c6ec80b1087044c4bc7e1413dd7e52cc85402c553fb6732dd/20230302-150121__01.jpg.80x80_q85_crop.jpg?token=ZPA1Hg%3AjXRLPPMtdgE6o9p1Iwf-JI416zt0CGJZPRwaT09gy6UKmdUZQ3lHoJZY-g7KL5c49hNX14-1f0wDF55CGwGlYQ"
            }
        ],
        zone: "Western",
        product_order: "3kg|steel(2),6kg|steel(2)",
        distributor_name: [
            {
                content: "Kamal Deen",
                url: "https://media-protected.taiga.io/user/4/c/d/a/ac26fb36644c6ec80b1087044c4bc7e1413dd7e52cc85402c553fb6732dd/20230302-150121__01.jpg.80x80_q85_crop.jpg?token=ZPA1Hg%3AjXRLPPMtdgE6o9p1Iwf-JI416zt0CGJZPRwaT09gy6UKmdUZQ3lHoJZY-g7KL5c49hNX14-1f0wDF55CGwGlYQ"
            }
        ],
        order_date: "2023/08/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    },
    {
        id: "101",
        name: [
            {
                content: "Yaw Graham",
                url: "https://media-protected.taiga.io/user/4/c/d/a/ac26fb36644c6ec80b1087044c4bc7e1413dd7e52cc85402c553fb6732dd/20230302-150121__01.jpg.80x80_q85_crop.jpg?token=ZPA1Hg%3AjXRLPPMtdgE6o9p1Iwf-JI416zt0CGJZPRwaT09gy6UKmdUZQ3lHoJZY-g7KL5c49hNX14-1f0wDF55CGwGlYQ"
            }
        ],
        zone: "Northen",
        product_order: "3kg|steel,6kg|steel(2)",
        distributor_name: [
            {
                content: "Yaw Graham",
                url: "https://media-protected.taiga.io/user/4/c/d/a/ac26fb36644c6ec80b1087044c4bc7e1413dd7e52cc85402c553fb6732dd/20230302-150121__01.jpg.80x80_q85_crop.jpg?token=ZPA1Hg%3AjXRLPPMtdgE6o9p1Iwf-JI416zt0CGJZPRwaT09gy6UKmdUZQ3lHoJZY-g7KL5c49hNX14-1f0wDF55CGwGlYQ"
            }
        ],
        order_date: "2023/12/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    },
    {
        id: "102",
        name: [
            {
                content: "Derric Nwafor",
                url: "https://media-protected.taiga.io/user/b/e/f/c/226ce6fcd199b2126cbe61cd896e2e0064863694614230f95ee5fcf9af44/abhijeet-photo.jpeg.80x80_q85_crop.jpg?token=ZPWdQA%3AJ6xdEY8rT0zBiToA-0blOpH6YD5pE1DBuIyhWtbSr33Ig5_XzLotLsw_qU3AyTuMLpwMCqPfOb6m8y7k_5Wq6Q"
            }
        ],
        zone: "Northen",
        product_order: "12kg|comp,6kg|comp(2)",
        distributor_name: [
            {
                content: "Derric Nwafor",
                url: "https://media-protected.taiga.io/user/b/e/f/c/226ce6fcd199b2126cbe61cd896e2e0064863694614230f95ee5fcf9af44/abhijeet-photo.jpeg.80x80_q85_crop.jpg?token=ZPWdQA%3AJ6xdEY8rT0zBiToA-0blOpH6YD5pE1DBuIyhWtbSr33Ig5_XzLotLsw_qU3AyTuMLpwMCqPfOb6m8y7k_5Wq6Q"
            }
        ],
        order_date: "2023/08/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    },
    {
        id: "103",
        name: [
            {
                content: "KamalDev Sulley Graham",
                url: "https://media-protected.taiga.io/user/c/5/5/f/3912cb3cfa54175d0ac606d99fa1057a8e054ac3d8c8f562f9d45c5ec400/a.jpg.80x80_q85_crop.jpg?token=ZPWdQA%3Ahr6j73-aaDqwxGqoAQNwmRKu8wM1bVbHmgzGVxMEvwIJptvGIyLal5dJ-eVOk0JjDN1cGM4WODTXBaCZyIblDQ"
            }
        ],
        zone: "Western",
        product_order: "3kg|steel(2),6kg|steel(2)",
        distributor_name: [
            {
                content: "KamalDev Sulley Graham",
                url: "https://media-protected.taiga.io/user/c/5/5/f/3912cb3cfa54175d0ac606d99fa1057a8e054ac3d8c8f562f9d45c5ec400/a.jpg.80x80_q85_crop.jpg?token=ZPWdQA%3Ahr6j73-aaDqwxGqoAQNwmRKu8wM1bVbHmgzGVxMEvwIJptvGIyLal5dJ-eVOk0JjDN1cGM4WODTXBaCZyIblDQ"
            }
        ],
        order_date: "2023/08/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    },
    {
        id: "104",
        name: [
            {
                content: "Yaw Graham",
                url: "https://media-protected.taiga.io/user/e/a/5/f/76f25406a66154a892596753a6906fc50f32a406caa7234d45e82a7345af/img-20210327-wa0012.jpg.80x80_q85_crop.jpg?token=ZPWdQA%3Af9w82i2-OIPsxJCeCMkpa-2y4macn6Tlddk8FCdpUWOzt6zVNCW8FsiVqqcmLHAy7ofhVH_8wPrBPJ8aIXllLw"
            }
        ],
        zone: "Northen",
        product_order: "3kg|steel,6kg|steel(2)",
        distributor_name: [
            {
                content: "Yaw Graham",
                url: "https://media-protected.taiga.io/user/e/a/5/f/76f25406a66154a892596753a6906fc50f32a406caa7234d45e82a7345af/img-20210327-wa0012.jpg.80x80_q85_crop.jpg?token=ZPWdQA%3Af9w82i2-OIPsxJCeCMkpa-2y4macn6Tlddk8FCdpUWOzt6zVNCW8FsiVqqcmLHAy7ofhVH_8wPrBPJ8aIXllLw"
            }
        ],
        order_date: "2023/12/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    },
    {
        id: "105",
        name: [
            {
                content: "Derric Nwafor",
                url: "https://media-protected.taiga.io/user/8/f/f/0/f0b49a33a08c236c95fffe37211ad517b72930e68e4d62b27b25adce6517/whatsapp-image-2023-06-12-at-123114-pm.jpeg.80x80_q85_crop.jpg?token=ZPWdQA%3ATjZypHmLc9cHRilfT63126oxugufBrKpS-IZKJCrnb2cVpk3x5N7IOkSJ8D71p_Dmg3Pdx5rrK77hEngdZaQWQ"
            }
        ],
        zone: "Northen",
        product_order: "12kg|comp,6kg|comp(2)",
        distributor_name: [
            {
                content: "Derric Nwafor",
                url: "https://media-protected.taiga.io/user/8/f/f/0/f0b49a33a08c236c95fffe37211ad517b72930e68e4d62b27b25adce6517/whatsapp-image-2023-06-12-at-123114-pm.jpeg.80x80_q85_crop.jpg?token=ZPWdQA%3ATjZypHmLc9cHRilfT63126oxugufBrKpS-IZKJCrnb2cVpk3x5N7IOkSJ8D71p_Dmg3Pdx5rrK77hEngdZaQWQ"
            }
        ],
        order_date: "2023/08/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    },
    {
        id: "106",
        name: [
            {
                content: "Yaw Graham",
                url: "https://media-protected.taiga.io/user/0/a/4/7/2c6eb52dc3bfc0115a6052a24e3e539428a0a26686d37d91bf6921aa44f1/dg.jpeg.80x80_q85_crop.jpg?token=ZPWdQA%3AjSgRgZGlSceUMCadMERsQFrXBk4Xsr7XmQSCW1TKXjnYuUfPMTgESPC7TtIEMY0cAARlt1UUNNXhIFm9eyRMhA"
            }
        ],
        zone: "Western",
        product_order: "3kg|steel(2),6kg|steel(2)",
        distributor_name: [
            {
                content: "Yaw Graham",
                url: "https://media-protected.taiga.io/user/0/a/4/7/2c6eb52dc3bfc0115a6052a24e3e539428a0a26686d37d91bf6921aa44f1/dg.jpeg.80x80_q85_crop.jpg?token=ZPWdQA%3AjSgRgZGlSceUMCadMERsQFrXBk4Xsr7XmQSCW1TKXjnYuUfPMTgESPC7TtIEMY0cAARlt1UUNNXhIFm9eyRMhA"
            }
        ],
        order_date: "2023/08/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    },
    {
        id: "107",
        name: [
            {
                content: "Derric Nwafor",
                url: "https://media-protected.taiga.io/user/d/0/2/7/1a449599e41648a881dc6b7029256ee8f22af67b429bf73016ccb47cf5eb/img_20230331_222150.jpg.80x80_q85_crop.jpg?token=ZPWdQA%3AS9UqrXwww-Z6Q_XRBLR4vu-xUiZjAPOPz9jbnss3IZkEfmgOVPGaGwjLcKItfTeiYowKGR6HcGiVPNEhFgJQ9w"
            }
        ],
        zone: "Northen",
        product_order: "3kg|steel,6kg|steel(2)",
        distributor_name: [
            {
                content: "Derric Nwafor",
                url: "https://media-protected.taiga.io/user/d/0/2/7/1a449599e41648a881dc6b7029256ee8f22af67b429bf73016ccb47cf5eb/img_20230331_222150.jpg.80x80_q85_crop.jpg?token=ZPWdQA%3AS9UqrXwww-Z6Q_XRBLR4vu-xUiZjAPOPz9jbnss3IZkEfmgOVPGaGwjLcKItfTeiYowKGR6HcGiVPNEhFgJQ9w"
            }
        ],
        order_date: "2023/12/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    },
    {
        id: "108",
        name: [
            {
                content: "Yaw Graham",
                url: "https://media-protected.taiga.io/user/c/9/f/4/e4c59b9760bf0d52cff38b481db3b740038f1cfa6bbfe508c0f676125bb8/harshit.jpeg.80x80_q85_crop.jpg?token=ZPWdQA%3AJ6FXpLri3LWgSvwMBqYzC3yMJc7nhQpgvHt4Sojn4_BDdBU8NgAkL5BskiKw9Ki1kgxOVo6m59bwxPYFTJO0SQ"
            }
        ],
        zone: "Northen",
        product_order: "12kg|comp,6kg|comp(2)",
        distributor_name: [
            {
                content: "Yaw Graham",
                url: "https://media-protected.taiga.io/user/c/9/f/4/e4c59b9760bf0d52cff38b481db3b740038f1cfa6bbfe508c0f676125bb8/harshit.jpeg.80x80_q85_crop.jpg?token=ZPWdQA%3AJ6FXpLri3LWgSvwMBqYzC3yMJc7nhQpgvHt4Sojn4_BDdBU8NgAkL5BskiKw9Ki1kgxOVo6m59bwxPYFTJO0SQ"
            }
        ],
        order_date: "2023/08/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    },
    {
        id: "109",
        name: [
            {
                content: "Derric Nwafor",
                url: "https://media-protected.taiga.io/user/7/2/b/4/9c555ae1e899ce44226fe047f35b335c8b9a5eb2f4a9f2a88b7e11f7f94f/screenshot-from-2023-08-01-13-09-06.png.80x80_q85_crop.png?token=ZPWduw%3AHt2c_-zicEBW4lR8ax6HwyRMAdL7j3gAu8rkYBRGPDNhUVJt-065NN6zeGBr7LbgdkhIWIaSo26B6uF6qIrR4A"
            }
        ],
        zone: "Western",
        product_order: "3kg|steel(2),6kg|steel(2)",
        distributor_name: [
            {
                content: "Derric Nwafor",
                url: "https://media-protected.taiga.io/user/7/2/b/4/9c555ae1e899ce44226fe047f35b335c8b9a5eb2f4a9f2a88b7e11f7f94f/screenshot-from-2023-08-01-13-09-06.png.80x80_q85_crop.png?token=ZPWduw%3AHt2c_-zicEBW4lR8ax6HwyRMAdL7j3gAu8rkYBRGPDNhUVJt-065NN6zeGBr7LbgdkhIWIaSo26B6uF6qIrR4A"
            }
        ],
        order_date: "2023/08/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    },
    {
        id: "110",
        name: [
            {
                content: "KamalDev Sulley Graham",
                url: "https://media-protected.taiga.io/user/e/4/e/e/b7af1d4f626e88108591d1c640b33e4ada38eb7dffa571cd6bea20c9f875/70866732_10206628315942161_1006551475880460288_n.jpg.80x80_q85_crop.jpg?token=ZPWdQA%3A9yRyy5SV6HUwj-ImTT2_LuNpv3LczyWToMrlFtkZI5bqxxbatCBjWIna3xFRSz5nykMt7eSnB_dumxTucnOArw"
            }
        ],
        zone: "Northen",
        product_order: "3kg|steel,6kg|steel(2)",
        distributor_name: [
            {
                content: "KamalDev Sulley Graham",
                url: "https://media-protected.taiga.io/user/e/4/e/e/b7af1d4f626e88108591d1c640b33e4ada38eb7dffa571cd6bea20c9f875/70866732_10206628315942161_1006551475880460288_n.jpg.80x80_q85_crop.jpg?token=ZPWdQA%3A9yRyy5SV6HUwj-ImTT2_LuNpv3LczyWToMrlFtkZI5bqxxbatCBjWIna3xFRSz5nykMt7eSnB_dumxTucnOArw"
            }
        ],
        order_date: "2023/12/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    },
    {
        id: "111",
        name: [
            {
                content: "Yaw Graham",
                url: "https://media-protected.taiga.io/user/e/7/8/d/d1df548c8c8f29436a2ca914243629fc75393f589facfd579c8f15efc2db/p.jfif.80x80_q85_crop.jpg?token=ZPWduw%3Ar3ZwPsK_glLrrz0ZB0r3Mlqi8u88tEbIiwM697-nrrcnNbUPREv2I7URwlIqY1QFem1buRhsg_8IpOmGC1JV5w"
            }
        ],
        zone: "Northen",
        product_order: "12kg|comp,6kg|comp(2)",
        distributor_name: [
            {
                content: "Yaw Graham",
                url: "https://media-protected.taiga.io/user/e/7/8/d/d1df548c8c8f29436a2ca914243629fc75393f589facfd579c8f15efc2db/p.jfif.80x80_q85_crop.jpg?token=ZPWduw%3Ar3ZwPsK_glLrrz0ZB0r3Mlqi8u88tEbIiwM697-nrrcnNbUPREv2I7URwlIqY1QFem1buRhsg_8IpOmGC1JV5w"
            }
        ],
        order_date: "2023/08/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    },
    {
        id: "112",
        name: [
            {
                content: "Yaw Graham",
                url: "https://media-protected.taiga.io/user/3/7/8/1/763ad6fd69d24fe8be4038aae2728c686460584a83300aae73ab3b99b61b/whatsapp-image-2022-02-22-at-134707.jpeg.80x80_q85_crop.jpg?token=ZPWduw%3AYKD6fbUV5-JC8A9-lDLaKjOuiEde-XevDayGtiJ-R2Psuxvrp0EB6tdY3Oz5BxdYs11xiDM0A_PS2Im-LO3QFA"
            }
        ],
        zone: "Western",
        product_order: "3kg|steel(2),6kg|steel(2)",
        distributor_name: [
            {
                content: "Yaw Graham",
                url: "https://media-protected.taiga.io/user/3/7/8/1/763ad6fd69d24fe8be4038aae2728c686460584a83300aae73ab3b99b61b/whatsapp-image-2022-02-22-at-134707.jpeg.80x80_q85_crop.jpg?token=ZPWduw%3AYKD6fbUV5-JC8A9-lDLaKjOuiEde-XevDayGtiJ-R2Psuxvrp0EB6tdY3Oz5BxdYs11xiDM0A_PS2Im-LO3QFA"
            }
        ],
        order_date: "2023/08/05",
        total_amount: "GHS 556",
        order_id: "AA1234",
        order_status: [
            {
                order_status: false,
                content: "Pending",
            }
        ],
    }
]

export const allCustomers = [
    {
        id: "101",
        name: [
            {
                content: "Yaw Graham",
                url: "https://media-protected.taiga.io/user/4/c/d/a/ac26fb36644c6ec80b1087044c4bc7e1413dd7e52cc85402c553fb6732dd/20230302-150121__01.jpg.80x80_q85_crop.jpg?token=ZPA1Hg%3AjXRLPPMtdgE6o9p1Iwf-JI416zt0CGJZPRwaT09gy6UKmdUZQ3lHoJZY-g7KL5c49hNX14-1f0wDF55CGwGlYQ"
            }
        ],
        zone: "Northen",
        email: "yawboafo@gmail.com",
        phone: "0277400000",
        latest_order: "3kg|steel,6kg|steel(2)",
        status: [
            {
                status: true,
                content: "Active",
            }
        ],
        distributor_name: [
            {
                content: "Yaw Graham",
                url: "https://media-protected.taiga.io/user/4/c/d/a/ac26fb36644c6ec80b1087044c4bc7e1413dd7e52cc85402c553fb6732dd/20230302-150121__01.jpg.80x80_q85_crop.jpg?token=ZPA1Hg%3AjXRLPPMtdgE6o9p1Iwf-JI416zt0CGJZPRwaT09gy6UKmdUZQ3lHoJZY-g7KL5c49hNX14-1f0wDF55CGwGlYQ"
            }
        ],
        join_date: "2023/12/05",
    },
    {
        id: "102",
        name: [
            {
                content: "Derric Nwafor",
                url: "https://media-protected.taiga.io/user/7/2/b/4/9c555ae1e899ce44226fe047f35b335c8b9a5eb2f4a9f2a88b7e11f7f94f/screenshot-from-2023-08-01-13-09-06.png.80x80_q85_crop.png?token=ZPWduw%3AHt2c_-zicEBW4lR8ax6HwyRMAdL7j3gAu8rkYBRGPDNhUVJt-065NN6zeGBr7LbgdkhIWIaSo26B6uF6qIrR4A"
            }
        ],
        zone: "Northen",
        email: "derricknwafor@gmail.com",
        phone: "0244400555",
        latest_order: "12kg|comp,6kg|comp(2)",
        status: [
            {
                status: false,
                content: "Inactive",
            }
        ],
        distributor_name: [
            {
                content: "Derric Nwafor",
                url: "https://media-protected.taiga.io/user/7/2/b/4/9c555ae1e899ce44226fe047f35b335c8b9a5eb2f4a9f2a88b7e11f7f94f/screenshot-from-2023-08-01-13-09-06.png.80x80_q85_crop.png?token=ZPWduw%3AHt2c_-zicEBW4lR8ax6HwyRMAdL7j3gAu8rkYBRGPDNhUVJt-065NN6zeGBr7LbgdkhIWIaSo26B6uF6qIrR4A"
            }
        ],
        join_date: "2023/08/05",
    },
    {
        id: "103",
        name: [
            {
                content: "KamalDev Sulley Graham",
                url: "https://media-protected.taiga.io/user/5/d/7/f/713e2adb889ba0288eaeaf6870ffb74a362c332eb5b39565b2f117080184/16726594728082.jpg.80x80_q85_crop.jpg?token=ZPWduw%3AjIh95FjQ16kdytndf_4eiLbIVnCDGtPFWvxrwxS8jgydMUyBGnqTeNNt5pB1zXp7RwFLd2zm5FIrhmjSPsK9Sw"
            }
        ],
        zone: "Western",
        email: "kamaldeen@gmail.com",
        phone: "0266404400",
        latest_order: "3kg|steel(2),6kg|steel(2)",
        status: [
            {
                status: false,
                content: "Inactive",
            }
        ],
        distributor_name: [
            {
                content: "KamalDev Sulley Graham",
                url: "https://media-protected.taiga.io/user/5/d/7/f/713e2adb889ba0288eaeaf6870ffb74a362c332eb5b39565b2f117080184/16726594728082.jpg.80x80_q85_crop.jpg?token=ZPWduw%3AjIh95FjQ16kdytndf_4eiLbIVnCDGtPFWvxrwxS8jgydMUyBGnqTeNNt5pB1zXp7RwFLd2zm5FIrhmjSPsK9Sw"
            }
        ],
        join_date: "2023/08/05",
    },
    {
        id: "104",
        name: [
            {
                content: "Yaw Boafo",
                url: "https://media-protected.taiga.io/user/1/0/d/1/1c44b04b9bd7fe88fdd8805a74ab15eef6a39cdd13231d06a5eff65ff83e/passport_photo_priyanka_adik.jpg.80x80_q85_crop.jpg?token=ZPWduw%3AxEqle-pWp5TB7zVhmJuWdaryTkGssxAJomZq1E6C2Ydodvi0eTApmRjPN9oFEFeqqy0y0Mp6DhO6wHLhkdbROg"
            }
        ],
        zone: "Northen",
        email: "yawboafo@gmail.com",
        phone: "0277400000",
        latest_order: "3kg|steel,6kg|steel(2)",
        status: [
            {
                status: true,
                content: "Active",
            }
        ],
        distributor_name: [
            {
                content: "Yaw Boafo",
                url: "https://media-protected.taiga.io/user/1/0/d/1/1c44b04b9bd7fe88fdd8805a74ab15eef6a39cdd13231d06a5eff65ff83e/passport_photo_priyanka_adik.jpg.80x80_q85_crop.jpg?token=ZPWduw%3AxEqle-pWp5TB7zVhmJuWdaryTkGssxAJomZq1E6C2Ydodvi0eTApmRjPN9oFEFeqqy0y0Mp6DhO6wHLhkdbROg"
            }
        ],
        join_date: "2023/12/05",
    },
    {
        id: "105",
        name: [
            {
                content: "Dziedzorm Doe",
                url: "https://media-protected.taiga.io/user/4/c/d/a/ac26fb36644c6ec80b1087044c4bc7e1413dd7e52cc85402c553fb6732dd/20230302-150121__01.jpg.80x80_q85_crop.jpg?token=ZPA1Hg%3AjXRLPPMtdgE6o9p1Iwf-JI416zt0CGJZPRwaT09gy6UKmdUZQ3lHoJZY-g7KL5c49hNX14-1f0wDF55CGwGlYQ"
            }
        ],
        zone: "Northen",
        email: "derricknwafor@gmail.com",
        phone: "0244400555",
        latest_order: "12kg|comp,6kg|comp(2)",
        status: [
            {
                status: false,
                content: "Inactive",
            }
        ],
        distributor_name: [
            {
                content: "Dziedzorm Doe",
                url: "https://media-protected.taiga.io/user/4/c/d/a/ac26fb36644c6ec80b1087044c4bc7e1413dd7e52cc85402c553fb6732dd/20230302-150121__01.jpg.80x80_q85_crop.jpg?token=ZPA1Hg%3AjXRLPPMtdgE6o9p1Iwf-JI416zt0CGJZPRwaT09gy6UKmdUZQ3lHoJZY-g7KL5c49hNX14-1f0wDF55CGwGlYQ"
            }
        ],
        join_date: "2023/08/05",
    },
    {
        id: "106",
        name: [
            {
                content: "Yaw Boafo",
                url: "https://media-protected.taiga.io/user/5/b/3/a/4a4afa6630ec7fbb4e3382dd8893131c3dfdaed06c450c16fbb5b1f65455/employee_logo_352e9deb1f444b65bcff41f0f287e78e787311.png.80x80_q85_crop.png?token=ZPWduw%3AainT12BQkbIqpNf5Sx-tCAKa9Ft7uXR4vTxX3dbajsy9rFJRnTOjK-KfiVGtHisTNVsMWpEY5wYnNeJUObQIWQ"
            }
        ],
        zone: "Western",
        email: "kamaldeen@gmail.com",
        phone: "0266404400",
        latest_order: "3kg|steel(2),6kg|steel(2)",
        status: [
            {
                status: false,
                content: "Inactive",
            }
        ],
        distributor_name: [
            {
                content: "Yaw Boafo",
                url: "https://media-protected.taiga.io/user/5/b/3/a/4a4afa6630ec7fbb4e3382dd8893131c3dfdaed06c450c16fbb5b1f65455/employee_logo_352e9deb1f444b65bcff41f0f287e78e787311.png.80x80_q85_crop.png?token=ZPWduw%3AainT12BQkbIqpNf5Sx-tCAKa9Ft7uXR4vTxX3dbajsy9rFJRnTOjK-KfiVGtHisTNVsMWpEY5wYnNeJUObQIWQ"
            }
        ],
        join_date: "2023/08/05",
    },
    {
        id: "107",
        name: [
            {
                content: "Kamal Deen",
                url: "https://media-protected.taiga.io/user/0/f/f/5/7bad725ed2e262fa802a6fdac45b73b8056d069a01e8eb47a58715cc8594/2c2edf69-9877-43cc-9cd8-2ad6f878dffe.jpg.80x80_q85_crop.jpg?token=ZPWduw%3Ascco_CtW0jX1X6dtk2lVNdLp8jClr0fKFNQxkwg199W29WleKc5mk5E6bHu5c5r_2vkMqIQFxyhmeEuQ8cWrsg"
            }
        ],
        zone: "Northen",
        email: "yawboafo@gmail.com",
        phone: "0277400000",
        latest_order: "3kg|steel,6kg|steel(2)",
        status: [
            {
                status: true,
                content: "Active",
            }
        ],
        distributor_name: [
            {
                content: "Kamal Deen",
                url: "https://media-protected.taiga.io/user/0/f/f/5/7bad725ed2e262fa802a6fdac45b73b8056d069a01e8eb47a58715cc8594/2c2edf69-9877-43cc-9cd8-2ad6f878dffe.jpg.80x80_q85_crop.jpg?token=ZPWduw%3Ascco_CtW0jX1X6dtk2lVNdLp8jClr0fKFNQxkwg199W29WleKc5mk5E6bHu5c5r_2vkMqIQFxyhmeEuQ8cWrsg"
            }
        ],
        join_date: "2023/12/05",
    },
    {
        id: "108",
        name: [
            {
                content: "Derric Nwafor",
                url: "https://media-protected.taiga.io/user/1/f/b/5/06c64256092272a9e02af953f7bcda0e97a01a73d84cf252f29300464ecd/img_20230109_100352_149.jpg.80x80_q85_crop.jpg?token=ZPWduw%3AU7UZVLykf9m8cXnTXY7-FbvQYDFH-ioFAD6FZ1KtS_KZJy1hkd4jLVW7qgG1FnVZKf_PqEeBt10uZ_N6mCiesA"
            }
        ],
        zone: "Northen",
        email: "derricknwafor@gmail.com",
        phone: "0244400555",
        latest_order: "12kg|comp,6kg|comp(2)",
        status: [
            {
                status: false,
                content: "Inactive",
            }
        ],
        distributor_name: [
            {
                content: "Derric Nwafor",
                url: "https://media-protected.taiga.io/user/1/f/b/5/06c64256092272a9e02af953f7bcda0e97a01a73d84cf252f29300464ecd/img_20230109_100352_149.jpg.80x80_q85_crop.jpg?token=ZPWduw%3AU7UZVLykf9m8cXnTXY7-FbvQYDFH-ioFAD6FZ1KtS_KZJy1hkd4jLVW7qgG1FnVZKf_PqEeBt10uZ_N6mCiesA"
            }
        ],
        join_date: "2023/08/05",
    },
    {
        id: "109",
        name: [
            {
                content: "KamalDev Sulley Graham",
                url: "https://media-protected.taiga.io/user/f/0/c/f/44310b7f150ee54b3ead22f4c0e2f3ec1a74ad415152ef32d132e3412506/vishal_image.jpg.80x80_q85_crop.jpg?token=ZPWduw%3A2-WfirFBTncQe_L1fDVXraFDMaEK4AxM3Kh8TyYE1Qv5RxHOEZH-S4yp0tTWLykusLqsGAGMxO082noDnSXtRQ"
            }
        ],
        zone: "Western",
        email: "kamaldeen@gmail.com",
        phone: "0266404400",
        latest_order: "3kg|steel(2),6kg|steel(2)",
        status: [
            {
                status: false,
                content: "Inactive",
            }
        ],
        distributor_name: [
            {
                content: "KamalDev Sulley Graham",
                url: "https://media-protected.taiga.io/user/f/0/c/f/44310b7f150ee54b3ead22f4c0e2f3ec1a74ad415152ef32d132e3412506/vishal_image.jpg.80x80_q85_crop.jpg?token=ZPWduw%3A2-WfirFBTncQe_L1fDVXraFDMaEK4AxM3Kh8TyYE1Qv5RxHOEZH-S4yp0tTWLykusLqsGAGMxO082noDnSXtRQ"
            }
        ],
        join_date: "2023/08/05",
    },
    {
        id: "110",
        name: [
            {
                content: "Derric Nwafor",
                url: "https://media-protected.taiga.io/user/7/2/b/4/9c555ae1e899ce44226fe047f35b335c8b9a5eb2f4a9f2a88b7e11f7f94f/screenshot-from-2023-08-01-13-09-06.png.80x80_q85_crop.png?token=ZPWduw%3AHt2c_-zicEBW4lR8ax6HwyRMAdL7j3gAu8rkYBRGPDNhUVJt-065NN6zeGBr7LbgdkhIWIaSo26B6uF6qIrR4A"
            }
        ],
        zone: "Northen",
        email: "yawboafo@gmail.com",
        phone: "0277400000",
        latest_order: "3kg|steel,6kg|steel(2)",
        status: [
            {
                status: true,
                content: "Active",
            }
        ],
        distributor_name: [
            {
                content: "Derric Nwafor",
                url: "https://media-protected.taiga.io/user/7/2/b/4/9c555ae1e899ce44226fe047f35b335c8b9a5eb2f4a9f2a88b7e11f7f94f/screenshot-from-2023-08-01-13-09-06.png.80x80_q85_crop.png?token=ZPWduw%3AHt2c_-zicEBW4lR8ax6HwyRMAdL7j3gAu8rkYBRGPDNhUVJt-065NN6zeGBr7LbgdkhIWIaSo26B6uF6qIrR4A"
            }
        ],
        join_date: "2023/12/05",
    },
    {
        id: "111",
        name: [
            {
                content: "Kamal Deen",
                url: "https://media-protected.taiga.io/user/1/f/b/5/06c64256092272a9e02af953f7bcda0e97a01a73d84cf252f29300464ecd/img_20230109_100352_149.jpg.80x80_q85_crop.jpg?token=ZPWduw%3AU7UZVLykf9m8cXnTXY7-FbvQYDFH-ioFAD6FZ1KtS_KZJy1hkd4jLVW7qgG1FnVZKf_PqEeBt10uZ_N6mCiesA"
            }
        ],
        zone: "Northen",
        email: "derricknwafor@gmail.com",
        phone: "0244400555",
        latest_order: "12kg|comp,6kg|comp(2)",
        status: [
            {
                status: false,
                content: "Inactive",
            }
        ],
        distributor_name: [
            {
                content: "Kamal Deen",
                url: "https://media-protected.taiga.io/user/1/f/b/5/06c64256092272a9e02af953f7bcda0e97a01a73d84cf252f29300464ecd/img_20230109_100352_149.jpg.80x80_q85_crop.jpg?token=ZPWduw%3AU7UZVLykf9m8cXnTXY7-FbvQYDFH-ioFAD6FZ1KtS_KZJy1hkd4jLVW7qgG1FnVZKf_PqEeBt10uZ_N6mCiesA"
            }
        ],
        join_date: "2023/08/05",
    },
    {
        id: "112",
        name: [
            {
                content: "Kamal Deen",
                url: "https://media-protected.taiga.io/user/4/c/d/a/ac26fb36644c6ec80b1087044c4bc7e1413dd7e52cc85402c553fb6732dd/20230302-150121__01.jpg.80x80_q85_crop.jpg?token=ZPA1Hg%3AjXRLPPMtdgE6o9p1Iwf-JI416zt0CGJZPRwaT09gy6UKmdUZQ3lHoJZY-g7KL5c49hNX14-1f0wDF55CGwGlYQ"
            }
        ],
        zone: "Western",
        email: "kamaldeen@gmail.com",
        phone: "0266404400",
        latest_order: "3kg|steel(2),6kg|steel(2)",
        status: [
            {
                status: false,
                content: "Inactive",
            }
        ],
        distributor_name: [
            {
                content: "Kamal Deen",
                url: "https://media-protected.taiga.io/user/4/c/d/a/ac26fb36644c6ec80b1087044c4bc7e1413dd7e52cc85402c553fb6732dd/20230302-150121__01.jpg.80x80_q85_crop.jpg?token=ZPA1Hg%3AjXRLPPMtdgE6o9p1Iwf-JI416zt0CGJZPRwaT09gy6UKmdUZQ3lHoJZY-g7KL5c49hNX14-1f0wDF55CGwGlYQ"
            }
        ],
        join_date: "2023/08/05",
    },
    {
        id: "101",
        name: [
            {
                content: "Yaw Graham",
                url: "https://media-protected.taiga.io/user/4/c/d/a/ac26fb36644c6ec80b1087044c4bc7e1413dd7e52cc85402c553fb6732dd/20230302-150121__01.jpg.80x80_q85_crop.jpg?token=ZPA1Hg%3AjXRLPPMtdgE6o9p1Iwf-JI416zt0CGJZPRwaT09gy6UKmdUZQ3lHoJZY-g7KL5c49hNX14-1f0wDF55CGwGlYQ"
            }
        ],
        zone: "Northen",
        email: "yawboafo@gmail.com",
        phone: "0277400000",
        latest_order: "3kg|steel,6kg|steel(2)",
        status: [
            {
                status: true,
                content: "Active",
            }
        ],
        distributor_name: [
            {
                content: "Yaw Graham",
                url: "https://media-protected.taiga.io/user/4/c/d/a/ac26fb36644c6ec80b1087044c4bc7e1413dd7e52cc85402c553fb6732dd/20230302-150121__01.jpg.80x80_q85_crop.jpg?token=ZPA1Hg%3AjXRLPPMtdgE6o9p1Iwf-JI416zt0CGJZPRwaT09gy6UKmdUZQ3lHoJZY-g7KL5c49hNX14-1f0wDF55CGwGlYQ"
            }
        ],
        join_date: "2023/12/05",
    },
    {
        id: "102",
        name: [
            {
                content: "Derric Nwafor",
                url: "https://media-protected.taiga.io/user/b/e/f/c/226ce6fcd199b2126cbe61cd896e2e0064863694614230f95ee5fcf9af44/abhijeet-photo.jpeg.80x80_q85_crop.jpg?token=ZPWdQA%3AJ6xdEY8rT0zBiToA-0blOpH6YD5pE1DBuIyhWtbSr33Ig5_XzLotLsw_qU3AyTuMLpwMCqPfOb6m8y7k_5Wq6Q"
            }
        ],
        zone: "Northen",
        email: "derricknwafor@gmail.com",
        phone: "0244400555",
        latest_order: "12kg|comp,6kg|comp(2)",
        status: [
            {
                status: false,
                content: "Inactive",
            }
        ],
        distributor_name: [
            {
                content: "Derric Nwafor",
                url: "https://media-protected.taiga.io/user/b/e/f/c/226ce6fcd199b2126cbe61cd896e2e0064863694614230f95ee5fcf9af44/abhijeet-photo.jpeg.80x80_q85_crop.jpg?token=ZPWdQA%3AJ6xdEY8rT0zBiToA-0blOpH6YD5pE1DBuIyhWtbSr33Ig5_XzLotLsw_qU3AyTuMLpwMCqPfOb6m8y7k_5Wq6Q"
            }
        ],
        join_date: "2023/08/05",
    },
    {
        id: "103",
        name: [
            {
                content: "KamalDev Sulley Graham",
                url: "https://media-protected.taiga.io/user/c/5/5/f/3912cb3cfa54175d0ac606d99fa1057a8e054ac3d8c8f562f9d45c5ec400/a.jpg.80x80_q85_crop.jpg?token=ZPWdQA%3Ahr6j73-aaDqwxGqoAQNwmRKu8wM1bVbHmgzGVxMEvwIJptvGIyLal5dJ-eVOk0JjDN1cGM4WODTXBaCZyIblDQ"
            }
        ],
        zone: "Western",
        email: "kamaldeen@gmail.com",
        phone: "0266404400",
        latest_order: "3kg|steel(2),6kg|steel(2)",
        status: [
            {
                status: false,
                content: "Inactive",
            }
        ],
        distributor_name: [
            {
                content: "KamalDev Sulley Graham",
                url: "https://media-protected.taiga.io/user/c/5/5/f/3912cb3cfa54175d0ac606d99fa1057a8e054ac3d8c8f562f9d45c5ec400/a.jpg.80x80_q85_crop.jpg?token=ZPWdQA%3Ahr6j73-aaDqwxGqoAQNwmRKu8wM1bVbHmgzGVxMEvwIJptvGIyLal5dJ-eVOk0JjDN1cGM4WODTXBaCZyIblDQ"
            }
        ],
        join_date: "2023/08/05",
    },
    {
        id: "104",
        name: [
            {
                content: "Yaw Graham",
                url: "https://media-protected.taiga.io/user/e/a/5/f/76f25406a66154a892596753a6906fc50f32a406caa7234d45e82a7345af/img-20210327-wa0012.jpg.80x80_q85_crop.jpg?token=ZPWdQA%3Af9w82i2-OIPsxJCeCMkpa-2y4macn6Tlddk8FCdpUWOzt6zVNCW8FsiVqqcmLHAy7ofhVH_8wPrBPJ8aIXllLw"
            }
        ],
        zone: "Northen",
        email: "yawboafo@gmail.com",
        phone: "0277400000",
        latest_order: "3kg|steel,6kg|steel(2)",
        status: [
            {
                status: true,
                content: "Active",
            }
        ],
        distributor_name: [
            {
                content: "Yaw Graham",
                url: "https://media-protected.taiga.io/user/e/a/5/f/76f25406a66154a892596753a6906fc50f32a406caa7234d45e82a7345af/img-20210327-wa0012.jpg.80x80_q85_crop.jpg?token=ZPWdQA%3Af9w82i2-OIPsxJCeCMkpa-2y4macn6Tlddk8FCdpUWOzt6zVNCW8FsiVqqcmLHAy7ofhVH_8wPrBPJ8aIXllLw"
            }
        ],
        join_date: "2023/12/05",
    },
    {
        id: "105",
        name: [
            {
                content: "Derric Nwafor",
                url: "https://media-protected.taiga.io/user/8/f/f/0/f0b49a33a08c236c95fffe37211ad517b72930e68e4d62b27b25adce6517/whatsapp-image-2023-06-12-at-123114-pm.jpeg.80x80_q85_crop.jpg?token=ZPWdQA%3ATjZypHmLc9cHRilfT63126oxugufBrKpS-IZKJCrnb2cVpk3x5N7IOkSJ8D71p_Dmg3Pdx5rrK77hEngdZaQWQ"
            }
        ],
        zone: "Northen",
        email: "derricknwafor@gmail.com",
        phone: "0244400555",
        latest_order: "12kg|comp,6kg|comp(2)",
        status: [
            {
                status: false,
                content: "Inactive",
            }
        ],
        distributor_name: [
            {
                content: "Derric Nwafor",
                url: "https://media-protected.taiga.io/user/8/f/f/0/f0b49a33a08c236c95fffe37211ad517b72930e68e4d62b27b25adce6517/whatsapp-image-2023-06-12-at-123114-pm.jpeg.80x80_q85_crop.jpg?token=ZPWdQA%3ATjZypHmLc9cHRilfT63126oxugufBrKpS-IZKJCrnb2cVpk3x5N7IOkSJ8D71p_Dmg3Pdx5rrK77hEngdZaQWQ"
            }
        ],
        join_date: "2023/08/05",
    },
    {
        id: "106",
        name: [
            {
                content: "Yaw Graham",
                url: "https://media-protected.taiga.io/user/0/a/4/7/2c6eb52dc3bfc0115a6052a24e3e539428a0a26686d37d91bf6921aa44f1/dg.jpeg.80x80_q85_crop.jpg?token=ZPWdQA%3AjSgRgZGlSceUMCadMERsQFrXBk4Xsr7XmQSCW1TKXjnYuUfPMTgESPC7TtIEMY0cAARlt1UUNNXhIFm9eyRMhA"
            }
        ],
        zone: "Western",
        email: "kamaldeen@gmail.com",
        phone: "0266404400",
        latest_order: "3kg|steel(2),6kg|steel(2)",
        status: [
            {
                status: false,
                content: "Inactive",
            }
        ],
        distributor_name: [
            {
                content: "Yaw Graham",
                url: "https://media-protected.taiga.io/user/0/a/4/7/2c6eb52dc3bfc0115a6052a24e3e539428a0a26686d37d91bf6921aa44f1/dg.jpeg.80x80_q85_crop.jpg?token=ZPWdQA%3AjSgRgZGlSceUMCadMERsQFrXBk4Xsr7XmQSCW1TKXjnYuUfPMTgESPC7TtIEMY0cAARlt1UUNNXhIFm9eyRMhA"
            }
        ],
        join_date: "2023/08/05",
    },
    {
        id: "107",
        name: [
            {
                content: "Derric Nwafor",
                url: "https://media-protected.taiga.io/user/d/0/2/7/1a449599e41648a881dc6b7029256ee8f22af67b429bf73016ccb47cf5eb/img_20230331_222150.jpg.80x80_q85_crop.jpg?token=ZPWdQA%3AS9UqrXwww-Z6Q_XRBLR4vu-xUiZjAPOPz9jbnss3IZkEfmgOVPGaGwjLcKItfTeiYowKGR6HcGiVPNEhFgJQ9w"
            }
        ],
        zone: "Northen",
        email: "yawboafo@gmail.com",
        phone: "0277400000",
        latest_order: "3kg|steel,6kg|steel(2)",
        status: [
            {
                status: true,
                content: "Active",
            }
        ],
        distributor_name: [
            {
                content: "Derric Nwafor",
                url: "https://media-protected.taiga.io/user/d/0/2/7/1a449599e41648a881dc6b7029256ee8f22af67b429bf73016ccb47cf5eb/img_20230331_222150.jpg.80x80_q85_crop.jpg?token=ZPWdQA%3AS9UqrXwww-Z6Q_XRBLR4vu-xUiZjAPOPz9jbnss3IZkEfmgOVPGaGwjLcKItfTeiYowKGR6HcGiVPNEhFgJQ9w"
            }
        ],
        join_date: "2023/12/05",
    },
    {
        id: "108",
        name: [
            {
                content: "Yaw Graham",
                url: "https://media-protected.taiga.io/user/c/9/f/4/e4c59b9760bf0d52cff38b481db3b740038f1cfa6bbfe508c0f676125bb8/harshit.jpeg.80x80_q85_crop.jpg?token=ZPWdQA%3AJ6FXpLri3LWgSvwMBqYzC3yMJc7nhQpgvHt4Sojn4_BDdBU8NgAkL5BskiKw9Ki1kgxOVo6m59bwxPYFTJO0SQ"
            }
        ],
        zone: "Northen",
        email: "derricknwafor@gmail.com",
        phone: "0244400555",
        latest_order: "12kg|comp,6kg|comp(2)",
        status: [
            {
                status: false,
                content: "Inactive",
            }
        ],
        distributor_name: [
            {
                content: "Yaw Graham",
                url: "https://media-protected.taiga.io/user/c/9/f/4/e4c59b9760bf0d52cff38b481db3b740038f1cfa6bbfe508c0f676125bb8/harshit.jpeg.80x80_q85_crop.jpg?token=ZPWdQA%3AJ6FXpLri3LWgSvwMBqYzC3yMJc7nhQpgvHt4Sojn4_BDdBU8NgAkL5BskiKw9Ki1kgxOVo6m59bwxPYFTJO0SQ"
            }
        ],
        join_date: "2023/08/05",
    },
    {
        id: "109",
        name: [
            {
                content: "Derric Nwafor",
                url: "https://media-protected.taiga.io/user/7/2/b/4/9c555ae1e899ce44226fe047f35b335c8b9a5eb2f4a9f2a88b7e11f7f94f/screenshot-from-2023-08-01-13-09-06.png.80x80_q85_crop.png?token=ZPWduw%3AHt2c_-zicEBW4lR8ax6HwyRMAdL7j3gAu8rkYBRGPDNhUVJt-065NN6zeGBr7LbgdkhIWIaSo26B6uF6qIrR4A"
            }
        ],
        zone: "Western",
        email: "kamaldeen@gmail.com",
        phone: "0266404400",
        latest_order: "3kg|steel(2),6kg|steel(2)",
        status: [
            {
                status: false,
                content: "Inactive",
            }
        ],
        distributor_name: [
            {
                content: "Derric Nwafor",
                url: "https://media-protected.taiga.io/user/7/2/b/4/9c555ae1e899ce44226fe047f35b335c8b9a5eb2f4a9f2a88b7e11f7f94f/screenshot-from-2023-08-01-13-09-06.png.80x80_q85_crop.png?token=ZPWduw%3AHt2c_-zicEBW4lR8ax6HwyRMAdL7j3gAu8rkYBRGPDNhUVJt-065NN6zeGBr7LbgdkhIWIaSo26B6uF6qIrR4A"
            }
        ],
        join_date: "2023/08/05",
    },
    {
        id: "110",
        name: [
            {
                content: "KamalDev Sulley Graham",
                url: "https://media-protected.taiga.io/user/e/4/e/e/b7af1d4f626e88108591d1c640b33e4ada38eb7dffa571cd6bea20c9f875/70866732_10206628315942161_1006551475880460288_n.jpg.80x80_q85_crop.jpg?token=ZPWdQA%3A9yRyy5SV6HUwj-ImTT2_LuNpv3LczyWToMrlFtkZI5bqxxbatCBjWIna3xFRSz5nykMt7eSnB_dumxTucnOArw"
            }
        ],
        zone: "Northen",
        email: "yawboafo@gmail.com",
        phone: "0277400000",
        latest_order: "3kg|steel,6kg|steel(2)",
        status: [
            {
                status: true,
                content: "Active",
            }
        ],
        distributor_name: [
            {
                content: "KamalDev Sulley Graham",
                url: "https://media-protected.taiga.io/user/e/4/e/e/b7af1d4f626e88108591d1c640b33e4ada38eb7dffa571cd6bea20c9f875/70866732_10206628315942161_1006551475880460288_n.jpg.80x80_q85_crop.jpg?token=ZPWdQA%3A9yRyy5SV6HUwj-ImTT2_LuNpv3LczyWToMrlFtkZI5bqxxbatCBjWIna3xFRSz5nykMt7eSnB_dumxTucnOArw"
            }
        ],
        join_date: "2023/12/05",
    },
    {
        id: "111",
        name: [
            {
                content: "Yaw Graham",
                url: "https://media-protected.taiga.io/user/e/7/8/d/d1df548c8c8f29436a2ca914243629fc75393f589facfd579c8f15efc2db/p.jfif.80x80_q85_crop.jpg?token=ZPWduw%3Ar3ZwPsK_glLrrz0ZB0r3Mlqi8u88tEbIiwM697-nrrcnNbUPREv2I7URwlIqY1QFem1buRhsg_8IpOmGC1JV5w"
            }
        ],
        zone: "Northen",
        email: "derricknwafor@gmail.com",
        phone: "0244400555",
        latest_order: "12kg|comp,6kg|comp(2)",
        status: [
            {
                status: false,
                content: "Inactive",
            }
        ],
        distributor_name: [
            {
                content: "Yaw Graham",
                url: "https://media-protected.taiga.io/user/e/7/8/d/d1df548c8c8f29436a2ca914243629fc75393f589facfd579c8f15efc2db/p.jfif.80x80_q85_crop.jpg?token=ZPWduw%3Ar3ZwPsK_glLrrz0ZB0r3Mlqi8u88tEbIiwM697-nrrcnNbUPREv2I7URwlIqY1QFem1buRhsg_8IpOmGC1JV5w"
            }
        ],
        join_date: "2023/08/05",
    },
    {
        id: "112",
        name: [
            {
                content: "Yaw Graham",
                url: "https://media-protected.taiga.io/user/3/7/8/1/763ad6fd69d24fe8be4038aae2728c686460584a83300aae73ab3b99b61b/whatsapp-image-2022-02-22-at-134707.jpeg.80x80_q85_crop.jpg?token=ZPWduw%3AYKD6fbUV5-JC8A9-lDLaKjOuiEde-XevDayGtiJ-R2Psuxvrp0EB6tdY3Oz5BxdYs11xiDM0A_PS2Im-LO3QFA"
            }
        ],
        zone: "Western",
        email: "kamaldeen@gmail.com",
        phone: "0266404400",
        latest_order: "3kg|steel(2),6kg|steel(2)",
        status: [
            {
                status: false,
                content: "Inactive",
            }
        ],
        distributor_name: [
            {
                content: "Yaw Graham",
                url: "https://media-protected.taiga.io/user/3/7/8/1/763ad6fd69d24fe8be4038aae2728c686460584a83300aae73ab3b99b61b/whatsapp-image-2022-02-22-at-134707.jpeg.80x80_q85_crop.jpg?token=ZPWduw%3AYKD6fbUV5-JC8A9-lDLaKjOuiEde-XevDayGtiJ-R2Psuxvrp0EB6tdY3Oz5BxdYs11xiDM0A_PS2Im-LO3QFA"
            }
        ],
        join_date: "2023/08/05",
    }
]





export const getCustomersTableData = async (name) => {
    fetch(`api/${name}`)
        .then((res) => {
            // do something with responce
        })
        .catch((err) => {
            // do something with error
        });

    if (name == "customers") {
        sessionStorage.setItem("customers_data", JSON.stringify(allCustomers))
    } else if (name == "orders") {
        sessionStorage.setItem("customers_orders_data", JSON.stringify(latestOrders))
    } else if (name == "complaints"){
        sessionStorage.setItem("customer_complaints", JSON.stringify(complaints))
    }
}