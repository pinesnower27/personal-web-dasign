/* ========== 徐嘉琳个人网站 - 交互脚本 ========== */

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function () {

    // 多页面导航：根据当前文件名自动高亮（不拦截跳转）
    var current = (location.pathname.split('/').pop() || '').toLowerCase();
    if (!current || current === '/') current = 'index.html';
    document.querySelectorAll('.nav-links a').forEach(function (a) {
        var href = (a.getAttribute('href') || '').toLowerCase();
        var isActive = href === current || (current === '' && href === 'index.html');
        a.classList.toggle('active', isActive);
    });

    // 个人标签点击：点击时短暂高亮
    document.querySelectorAll('.tag-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            this.style.background = '#ffe4ec';
            var t = this;
            setTimeout(function () {
                t.style.background = '';
            }, 300);
        });
    });

    // 动态卡片点击：可后续改成打开详情页
    document.querySelectorAll('.update-card').forEach(function (card) {
        card.addEventListener('click', function () {
            var title = this.querySelector('.title').textContent;
            console.log('点击了：' + title);
        });
    });

    // 相册筛选：点击筛选按钮显示对应分类
    var albumFilters = document.querySelectorAll('.album-filter');
    var albumCards = document.querySelectorAll('.album-card');
    if (albumFilters.length && albumCards.length) {
        albumFilters.forEach(function (btn) {
            btn.addEventListener('click', function () {
                albumFilters.forEach(function (b) { b.classList.remove('active'); });
                this.classList.add('active');
                var filter = this.getAttribute('data-filter');
                albumCards.forEach(function (card) {
                    var cat = card.getAttribute('data-cat');
                    if (filter === 'all' || cat === filter) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // 联系表单：提交时阻止默认，仅提示（未接后端）
    var contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('消息已收到～（当前为前端演示，实际发送需接入后端）');
        });
    }

});
