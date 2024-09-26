document.addEventListener('DOMContentLoaded', () => {
    const categoryLinks = document.querySelectorAll('.sidebar a');
    const toolCards = document.querySelectorAll('.tool-card');
    const toolList = document.getElementById('tools');
    const noToolsMessage = document.getElementById('no-tools');
    const emailElement = document.getElementById('email');

    // 工具筛选函数
    function filterTools(category) {
        let hasTools = false;

        toolCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';  // 显示工具卡片
                hasTools = true;
            } else {
                card.style.display = 'none';  // 隐藏不属于该分类的卡片
            }
        });

        if (!hasTools) {
            toolList.style.display = 'none';  // 隐藏工具列表
            noToolsMessage.classList.remove('hidden');  // 显示“没有工具”提示
        } else {
            toolList.style.display = 'flex';  // 显示工具列表
            noToolsMessage.classList.add('hidden');  // 隐藏“没有工具”提示
        }
    }

    // 绑定导航栏点击事件
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.category;
            filterTools(category);
        });
    });

    // 初始显示全部工具
    filterTools('all');

    // 点击邮箱复制功能
    emailElement.addEventListener('click', () => {
        const email = emailElement.textContent;
        navigator.clipboard.writeText(email).then(() => {
            alert('Email copied to clipboard: ' + email);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });

    // GitHub 链接点击事件自动跳转，浏览器会默认打开链接，不需要额外逻辑
});
