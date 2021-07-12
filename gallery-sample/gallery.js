
//作品のタイトルとキャプション
let _data = [
    { title: '1', caption: '1つめの作品です' },
    { title: '2', caption: '2つめの作品です' },
    { title: '3', caption: '3つめの作品です' },
    { title: '4', caption: '4つめの作品です' },
    { title: '5', caption: '5つめの作品です' },
    { title: '6', caption: '6つめの作品です' },
    { title: '7', caption: '7つめの作品です' },
    { title: '8', caption: '8つめの作品です' },
    { title: '9', caption: '9つめの作品です' },
    { title: '10', caption: '10つめの作品です' },
];

//タイトルのみの場合
// let _data = [
//     title: '1',
//     title: '2',
//     title: '3',
//     title: '4',
//     title: '5',
//     title: '6',
//     title: '7',
//     title: '8',
//     title: '9',
//     title: '10',
// ];

class Modal {
    constructor(options) {
        this.area = options.area || "#gallery-area";
        this.data = options.data || _data;
        this.modal_height = options.modal_height || '500px';
        this.flex_height = options.flex_height || '100px';
        this.BGColor = options.BGColor || '#aaa';

        let wrapper = document.querySelector(this.area);
        let container = document.createElement('div');
        container.classList.add('graphics');
        let title = document.createElement('p');
        title.style.margin = '20px';
        title.style.fontWeight = 'bold';
        title.textContent = this.data[0].title;
        title.classList.add('graph_title');
        let caption = document.createElement('p');
        caption.style.margin = '20px';
        caption.textContent = this.data[0].caption;
        caption.classList.add('graph_caption');
        let modal = document.createElement('div');
        modal.classList.add('modal');
        let p_img = document.createElement('p');
        p_img.style.margin = '20px';
        p_img.style.display = 'flex';
        p_img.style.height = this.modal_height;
        p_img.style.justifyContent = 'center';
        p_img.style.alignItems = 'center';
        p_img.style.background = this.BGColor;
        let modal_img = document.createElement('img');
        modal_img.style.height = 'auto';
        modal_img.style.maxHeight = this.modal_height;
        modal_img.style.width = '100%';
        modal_img.style.objectFit = 'contain';
        modal_img.setAttribute('loading', 'lazy');
        modal_img.setAttribute('draggable', 'false');
        modal_img.setAttribute('src', `http://placehold.jp/300x800.png?text=${1}`);
        // ↑最初に大きく表示する画像
        modal_img.setAttribute('alt', this.data[0].title);
        p_img.appendChild(modal_img);
        modal.appendChild(p_img);

        let flex_modal = document.createElement('div');
        flex_modal.style.display = 'flex';
        flex_modal.style.overflowX = 'scroll';
        flex_modal.classList.add('graphics_flex');

        for (let i = 0; i < this.data.length; i++) {
            let flex_p = document.createElement('p');
            flex_p.style.margin = '20px';
            let flex_img = document.createElement('img');
            flex_img.style.height = this.flex_height;
            flex_img.style.width = this.flex_height;
            flex_img.style.objectFit = 'cover';
            flex_img.style.cursor = 'pointer';
            flex_img.setAttribute('loading', 'lazy');
            flex_img.setAttribute('draggable', 'false');
            let img = `http://placehold.jp/300x800.png?text=${i + 1}`;
            // 連番で画像を挿入可能
            // 例：`images/${i+1}.png`
            flex_img.setAttribute('src', img);
            flex_img.setAttribute('alt', this.data[i].title);
            flex_img.addEventListener('click', () => {
                modal_img.setAttribute('src', img);
                modal_img.setAttribute('alt', this.data[i].title);
                title.textContent = this.data[i].title;
                caption.textContent = this.data[i].caption;
            });
            flex_p.appendChild(flex_img);
            flex_modal.appendChild(flex_p);
        }

        container.appendChild(title);
        container.appendChild(modal);
        container.appendChild(caption);// ←タイトルのみの場合は削除
        container.appendChild(flex_modal);
        wrapper.appendChild(container);
    }//constructor
}

new Modal({
    area: "#gallery-area",//ギャラリーを入れる親要素。
    data: _data,//作品のタイトルとキャプションを入れたデータ
    modal_height: '500px',//大きい表示の画像の大きさ
    flex_height: '100px',//小さい表示の画像の大きさ
    BGColor: '#aaa',//大きい表示の画像の背景の色
});