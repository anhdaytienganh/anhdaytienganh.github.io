# anhdaytienganh.github.io

Trang giới thiệu lớp tiếng Anh giao tiếp của Ánh (song ngữ Việt / Anh). Đây là site tĩnh: HTML, CSS và JS thuần, không cần build.

## Chỉnh nội dung

| Muốn sửa | Mở file |
|---|---|
| Review học viên, bài giảng | `assets/js/data.js` (copy một khối `{ ... }` rồi sửa; mục có `sample: true` là mẫu và **không hiện** trên trang, xoá dòng đó khi đã là nội dung thật; chỉ đăng review thật, có sự đồng ý của học viên) |
| Chữ tiếng Việt trên trang | `index.html`, `lectures.html` |
| Bản dịch tiếng Anh | `assets/js/main.js` (object `EN`, theo key `data-i18n`) |
| Giao diện | `assets/css/style.css` (các dòng `/* Hallmark … */` ở đầu file ghi lại các quyết định thiết kế) |
| Ảnh đại diện | Thay file `assets/img/anh-portrait.jpg` (ảnh dọc, tỉ lệ 4:5, khoảng 960 x 1200) |
| Màu, font, khoảng cách | `assets/css/tokens.css`; mọi font phải hỗ trợ tiếng Việt |

## Xem thử trên máy

```sh
python3 -m http.server 8000
# mở http://localhost:8000
```

## Đăng lên GitHub Pages

1. Tạo repo **public** tên `anhdaytienganh.github.io` dưới tài khoản GitHub `anhdaytienganh`.
2. Push toàn bộ thư mục này lên nhánh `main`.
3. Vào **Settings → Pages**, chọn *Deploy from a branch*, nhánh `main`, thư mục `/ (root)`.
4. Sau vài phút, trang sẽ có tại https://anhdaytienganh.github.io
