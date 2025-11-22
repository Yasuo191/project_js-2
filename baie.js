// Khởi tạo các biến toàn cục
const previewDiv = document.getElementById('image');
const originalText = "Di chuột qua hoặc lấy tiêu điểm (focus) vào một hình ảnh bên dưới để hiển thị ở đây.";

// Thiết lập nội dung ban đầu (đảm bảo tính nhất quán)
previewDiv.innerHTML = originalText;

/**
 * Hàm được gọi bằng sự kiện onload của <body>
 * Mục tiêu: Thêm thuộc tính tabindex vào tất cả ảnh thumbnail
 */
function addTabindex() {
    // Thêm thông báo console.log để đảm bảo rằng sự kiện onload kích hoạt
    console.log("Sự kiện onload đã kích hoạt. Bắt đầu thêm tabindex.");

    // Lấy tất cả các phần tử ảnh thumbnail
    const thumbnails = document.getElementsByClassName('thumbnail');

    // Viết một vòng lặp for để lặp qua từng hình ảnh
    for (let i = 0; i < thumbnails.length; i++) {
        // Thêm thuộc tính tabindex="0" vào mỗi ảnh
        thumbnails[i].setAttribute('tabindex', '0');
        console.log(`Đã thêm tabindex="0" cho ảnh ${i + 1}`);
    }
    console.log("Hoàn tất việc thêm tabindex.");
}

/**
 * Hàm được gọi khi chuột ở trên (onmouseover) HOẶC ảnh được lấy tiêu điểm (onfocus)
 * @param {HTMLImageElement} element - Phần tử ảnh đã kích hoạt sự kiện.
 */
function upDate(element) {
    // console.log() để kiểm tra sự kiện có kích hoạt không
    console.log(`Sự kiện tương tác kích hoạt: Alt="${element.alt}", Src="${element.src}"`);

    const altText = element.alt;
    const imageSource = element.src;

    // Yêu cầu: Thay đổi văn bản (Alt text)
    previewDiv.innerHTML = altText;
    
    // Yêu cầu: Thay đổi hình nền
    previewDiv.style.backgroundImage = `url('${imageSource}')`;
    
    // Đảm bảo chữ vô hình trên nền ảnh để dễ đọc hơn (đáp ứng tiêu chí thẩm mỹ)
    previewDiv.style.color = "transparent"; 
}

/**
 * Hàm được gọi khi chuột rời khỏi (onmouseout) HOẶC tiêu điểm bị xóa (onblur)
 */
function unDo() {
    // console.log() để kiểm tra sự kiện có kích hoạt không
    console.log("Sự kiện hoàn tác (unDo) kích hoạt.");

    // Yêu cầu: Cập nhật hình nền trở lại URL trống
    previewDiv.style.backgroundImage = 'url("")'; 

    // Yêu cầu: Cập nhật văn bản trở lại văn bản gốc (hardcoding được mong đợi)
    previewDiv.style.color = "#333"; 
    previewDiv.innerHTML = originalText;
}