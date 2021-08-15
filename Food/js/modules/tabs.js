<<<<<<< HEAD
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    // TABS
    const tabsParent = document.querySelector(tabsSelector);
    const tabs = document.querySelectorAll(tabsParentSelector);
    const tabContent = document.querySelectorAll(tabsContentSelector);

    function hideContent() {
        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });

        tabContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
    }

    hideContent();

    function showContent(i = 0) {
        tabs[i].classList.add(activeClass);
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
    }

    showContent();

    tabsParent.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains(tabsParentSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (item == e.target) {
                    hideContent();
                    showContent(i);
                }
            });
        }
    });
}

=======
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    // TABS
    const tabsParent = document.querySelector(tabsSelector);
    const tabs = document.querySelectorAll(tabsParentSelector);
    const tabContent = document.querySelectorAll(tabsContentSelector);

    function hideContent() {
        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });

        tabContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
    }

    hideContent();

    function showContent(i = 0) {
        tabs[i].classList.add(activeClass);
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
    }

    showContent();

    tabsParent.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains(tabsParentSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (item == e.target) {
                    hideContent();
                    showContent(i);
                }
            });
        }
    });
}

>>>>>>> 0832ea9b5529a42b2045a6278e9c214a76d7cccf
export default tabs;