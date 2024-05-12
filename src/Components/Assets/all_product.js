import p1_img from "./product1.png";
import p2_img from "./product2.png";
import p3_img from "./product3.png";
import p4_img from "./product4.jpg";
import p5_img from "./product5.png";
import p6_img from "./product6.png";
import p7_img from "./product7.png";
import p8_img from "./product8.png";
import p9_img from "./product9.png";
import p10_img from "./product10.png";
import p11_img from "./product11.jpg";
import p12_img from "./product12.jpg";
import p13_img from "./product13.png";
import p14_img from "./product14.png";
import p15_img from "./product15.png";
import p16_img from "./product16.png";
import p17_img from "./product17.png";
import p18_img from "./product18.jpg";
import p19_img from "./product19.jpg";
import p20_img from "./product20.jpg";
import p21_img from "./product21.jpg";
import p22_img from "./product22.jpg";
import p23_img from "./product23.jpg";
import p24_img from "./product24.jpg";
import p25_img from "./product25.jpg";
import p26_img from "./product26.jpg";
import p27_img from "./product27.jpg";
import p28_img from "./product28.jpg";
import p29_img from "./product29.jpg";
import p30_img from "./product30.jpg";

let all_product = [
  {
    id: 1,
    name: "Kem nền Maybelline Tươi Mướt Chống Nắng SPF50 30ml #02",
    category: "kem-nen",
    image: p1_img,
    new_price: 188000,
    old_price: 228000,
  },
  {
    id: 2,
    name: "Phấn Má Hồng 02 Hồng Đào Ngọt Ngào Pink Peach 4.5g",
    category: "ma-hong",
    image: p2_img,
    new_price: 150000,
    old_price: 168000,
  },
  {
    id: 3,
    name: "Phấn Má Hồng 05 French Marsala Màu Đỏ Hồng Đất 4.7g",
    category: "ma-hong",
    image: p3_img,
    new_price: 149000,
    old_price: 225000,
  },
  {
    id: 4,
    name: "Son Thỏi 3CE Mịn Lì Rosiness - Màu Hồng Phấn 4g",
    category: "son",
    image: p4_img,
    new_price: 352000,
    old_price: 440000,
  },
  {
    id: 5,
    name: "Kem nền Maybelline Mịn Nhẹ Kiềm Dầu Chống Nắng 30ml #112",
    category: "kem-nen",
    image: p5_img,
    new_price: 218000,
    old_price: 288000,
  },
  {
    id: 6,
    name: "Kem nền Maybelline Mịn Nhẹ Kiềm Dầu Chống Nắng 30ml #120",
    category: "kem-nen",
    image: p6_img,
    new_price: 218000,
    old_price: 288000,
  },
  {
    id: 7,
    name: "Kem nền Maybelline Mịn Nhẹ Kiềm Dầu Chống Nắng 30ml #110",
    category: "kem-nen",
    image: p7_img,
    new_price: 218000,
    old_price: 288000,
  },
  {
    id: 8,
    name: "Kem nền Maybelline Mịn Nhẹ Kiềm Dầu Chống Nắng 30ml #115",
    category: "kem-nen",
    image: p8_img,
    new_price: 218000,
    old_price: 288000,
  },
  {
    id: 9,
    name: "Kem nền Maybelline Mịn Nhẹ Kiềm Dầu Chống Nắng 30ml #118",
    category: "kem-nen",
    image: p9_img,
    new_price: 218000,
    old_price: 288000,
  },
  {
    id: 10,
    name: "Kem nền Maybelline Mịn Nhẹ Kiềm Dầu Chống Nắng 30ml #130",
    category: "kem-nen",
    image: p10_img,
    new_price: 218000,
    old_price: 288000,
  },
  {
    id: 11,
    name: "Kem Nền Maybelline 30H Lâu Trôi Che Phủ Cao 30ml #112 ",
    category: "kem-nen",
    image: p11_img,
    new_price: 239000,
    old_price: 298000,
  },
  {
    id: 12,
    name: "Kem Nền Maybelline 30H Lâu Trôi Che Phủ Cao 30ml #110",
    category: "kem-nen",
    image: p12_img,
    new_price: 239000,
    old_price: 298000,
  },
  {
    id: 13,
    name: "Phấn Nước Laneige Cho Lớp Nền Mịn Lì 24H #23N 15gx2",
    category: "kem-nen",
    image: p13_img,
    new_price: 795000,
    old_price: 900000,
  },
  {
    id: 14,
    name: "Phấn Nước Laneige Cho Lớp Nền Mịn Lì 24H #20N 15gx2",
    category: "kem-nen",
    image: p14_img,
    new_price: 795000,
    old_price: 900000,
  },
  {
    id: 15,
    name: "Má Hồng Lilybyred Dạng Kem 02 Innocent Pink - Hồng Baby 3.5g",
    category: "ma-hong",
    image: p15_img,
    new_price: 149000,
    old_price: 225000,
  },
  {
    id: 16,
    name: "Má Hồng Lilybyred Dạng Kem 01 Loveable Coral - Hồng Cam Đào 3.5g",
    category: "ma-hong",
    image: p16_img,
    new_price: 149000,
    old_price: 225000,
  },
  {
    id: 17,
    name: "Má Hồng Lilybyred Dạng Kem 03 Dollish Rose - Hồng Sữa 3.5g",
    category: "ma-hong",
    image: p17_img,
    new_price: 149000,
    old_price: 225000,
  },
  {
    id: 18,
    name: "Phấn Má Hồng Maybelline Mịn Lì Chuẩn Màu 30 Fierce 4.5g",
    category: "ma-hong",
    image: p18_img,
    new_price: 148000,
    old_price:  178000,
  },
  {
    id: 19,
    name: "Phấn Má Hồng Maybelline Mịn Lì Chuẩn Màu 20 Hopeful 4.5g",
    category: "ma-hong",
    image: p19_img,
    new_price: 148000,
    old_price:  178000,
  },
  {
    id: 20,
    name: "Phấn Má Hồng Maybelline Mịn Lì Chuẩn Màu 10 Brave 4.5g",
    category: "ma-hong",
    image: p20_img,
    new_price: 148000,
    old_price:  178000,
  },
  {
    id: 21,
    name: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1299 Đỏ Cam Đất 1.7g",
    category: "son",
    image: p21_img,
    new_price: 179000,
    old_price: 228000,
  },
  {
    id: 22,
    name: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 899 Đỏ Gạch 1.7g",
    category: "son",
    image: p22_img,
    new_price: 179000,
    old_price: 228000,
  },
  {
    id: 23,
    name: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 799 Cam Ngả Đất 1.7g",
    category: "son",
    image: p23_img,
    new_price: 179000,
    old_price: 228000,
  },
  {
    id: 24,
    name: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 1288 Gạch Da 1.7g",
    category: "son",
    image: p24_img,
    new_price: 179000,
    old_price: 228000,
  },
  {
    id: 25,
    name: "Son Lì Maybelline Mịn Môi Siêu Nhẹ 299 Đỏ Thuần 1.7g",
    category: "son",
    image: p25_img,
    new_price: 179000,
    old_price: 228000,
  },
  {
    id: 26,
    name: "Son Thỏi 3CE Mịn Lì 222 Step And Go - Đỏ Đất 3.5g",
    category: "son",
    image: p26_img,
    new_price: 304000,
    old_price: 380000,
  },
  {
    id: 27,
    name: "Son Thỏi 3CE Mịn Lì 221 Step And Go - Hồng Đất 3.5g",
    category: "son",
    image: p27_img,
    new_price: 304000,
    old_price: 380000,
  },
  {
    id: 28,
    name: "Son Thỏi 3CE Mịn Lì 909 Step And Go - Đỏ Gạch 3.5g",
    category: "son",
    image: p28_img,
    new_price: 304000,
    old_price: 380000,
  },
  {
    id: 29,
    name: "Son Thỏi Lì 3CE Vỏ Trong Suốt Speak To Me - Đỏ Mận 3.5g",
    category: "son",
    image: p29_img,
    new_price: 304000,
    old_price: 380000,
  },
  {
    id: 30,
    name: "Son Thỏi Lì 3CE Vỏ Trong Suốt Red Muse - Đỏ Tươi 3.5g",
    category: "son",
    image: p30_img,
    new_price: 304000,
    old_price: 380000,
  },
];

export default all_product