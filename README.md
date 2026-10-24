# anhdaytienganh.github.io

Trang giới thiệu lớp tiếng Anh giao tiếp của Ánh (song ngữ Việt / Anh). Đây là site tĩnh: HTML, CSS và JS thuần, không cần build.

## Chỉnh nội dung

| Muốn sửa | Mở file |
|---|---|
| Review học viên, bài giảng | `assets/js/data.js` (copy một khối `{ ... }` rồi sửa; xoá `sample: true` khi đã là nội dung thật) |
| Chữ tiếng Việt trên trang | `index.html`, `lectures.html` |
| Bản dịch tiếng Anh | `assets/js/main.js` (object `EN`, theo key `data-i18n`) |
| Màu sắc, giao diện | `assets/css/style.css` (biến ở đầu file) |
| Ảnh đại diện | Thêm `assets/img/anh.jpg`, rồi trong `index.html` thay `<span class="initial">Á</span>` bằng `<img src="assets/img/anh.jpg" alt="Ánh">` |

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
