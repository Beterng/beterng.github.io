document.addEventListener('DOMContentLoaded', function () {
    let start_done_text_num1 ="Hello! 🙋";
    let start_done_text_num2 = "The \"Group 3 - Eagle\" front-end was built with basic Javascript, CSS module, and lots of love. ";
    console.log(start_done_text_num1);
    console.log(start_done_text_num2);

    // Hiệu ứng cuộn để hiển thị các phần tử
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add('show');
            }
        });
    });
});
