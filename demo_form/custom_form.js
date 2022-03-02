/* 
Добрый день! Решил сделать полностью не зависимый компонент, поэтому стили добавил внутрь класса.
Прятать реализацию в Shadow DOM не стал, т.к. не знаю на сколько это актуально.
*/

class CustomForm extends HTMLFormElement {
  constructor() {
    super();

    this.classList = 'custom-form';
    this.name = 'custom-form';
  }

  render = () => {
    this.innerHTML = `
        <section class="search-section">
         
        <label class="label">Компания или ИП
            <input class="input" id="search" type="text" autocomplete="off"
              placeholder="Введите название, ИНН, ОГРН или адрес организации">
          </label>
          <div class="variants variants_none" id="variants">
            <div class="variants__wrap">
              <p class="variants__title">Выберите вариант или продолжите ввод</p>
              <ul class="variants__list"></ul>
            </div>
          </div>
        </section>

      <section class="results-section">
        <label class="label">Краткое наименование
          <input class="input" id="name_short" type="text" autocomplete="off">
        </label>

        <label class="label">Полное наименование
          <input class="input" id="name_full" type="text" autocomplete="off">
        </label>

        <label class="label">ИНН / КПП
          <input class="input" id="inn_kpp" type="text" autocomplete="off">
        </label>

        <label class="label">Адрес
          <input class="input" id="address" type="text" autocomplete="off">
        </label>
      </section>
    `;
  };

  connectedCallback() {
    this.render();
    this.search.addEventListener('input', this.searchHandler);
    this.variants = this.querySelector('.variants');
    this.variantsList = this.querySelector('.variants__list');
    this.variantsTitle = this.querySelector('.variants__title');
    this.variantsList.addEventListener('click', this.clickHandler);
    this.addStyle();
  }

  dataRequest = async (query) => {
    try {
      const url =
        'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party';
      const token = 'e6358e658be40f8873d048fe51f35fb75dc642a1';

      const options = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Token ' + token,
        },
        body: JSON.stringify({ query: query, count: 5 }),
      };
      const res = await fetch(url, options);
      this.data = await res.json();

      return this.data.suggestions;
    } catch (error) {
      console.log(error.message);
      return 'Сервер временно не доступен, попробуйте позже';
    }
  };

  clickHandler = (event) => {
    const index = event.target.closest('li').dataset.index;
    const data = this.data.suggestions[index].data;

    this.search.value = this.data.suggestions[index].value;
    this.inn_kpp.value = `${data.inn} / ${data.kpp}`;
    this.address.value = data.address.value;

    this.name_short.value = data.name.short_with_opf || '';
    this.name_full.value = data.name.full_with_opf || '';

    this.variantsList.innerHTML = '';
    this.variants.classList.add('variants_none');
  };

  searchHandler = async () => {
    const value = this.search.value;
    const res = await this.dataRequest(value);

    if (typeof res === 'string') {
      this.variantsTitle.innerHTML = res;
      this.variantsList.innerHTML = '';
      return;
    }

    if (value) {
      this.variants.classList.remove('variants_none');

      if (res.length) {
        this.variantsTitle.innerHTML = 'Выберите вариант или продолжите ввод';
        this.variantsList.innerHTML = '';

        this.variantsList.innerHTML = res
          .map(
            (
              item,
              index,
            ) => `<li class="variants__item item" data-index="${index}">
                        <p class="item__name">${item.value}</p>
                        <p class="item__data">${item.data.address.value}</p>
                       </li>`,
          )
          .join('');
      } else {
        this.variantsTitle.innerHTML = 'Неизвестная организация';
        this.variantsList.innerHTML = '';
      }
    } else this.variants.classList.add('variants_none');
  };

  addStyle = () => {
    const style = document.createElement('style');

    style.innerHTML = `
    .custom-form,
    .custom-form * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 18px;
  }

  .custom-form {
    width: 100%;
    max-width: 600px;
    padding: 20px 5px;
    margin: 0 auto;
  }

  .search-section {
    margin-bottom: 25px;
  }

 .search-section .label {
    font-weight: 900;
    font-size: 20px;
    margin-bottom: 0;
  }

  .search-section .input {
    margin-top: 10px;
  }

  .label {
    display: block;
    width: 100%;
    margin-bottom: 10px;
  }

  .input {
    display: inline-block;
    width: 100%;
    padding: 5px;
    margin-top: 5px;
  }

  .variants {
    position: relative;
    left: 0;
    z-index: 10;
    width: 100%;
  }

  .variants_none {
    display: none;
  }

  .variants__wrap {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px;
    width: 100%;
    background-color: #fff;
    color: gray;
    border: 1px solid gray;
  }

  .variants__list {
    list-style: none;

  }

  .variants__title {
    padding: 0 0 5px 0;
    user-select: none;
    font-size: 16px;
  }

  .item__name {
    font-size: 18px;
    margin-bottom: 3px;
  }

  .item__data {
    font-size: 16px;
  }

  .item {
    padding: 5px;
    cursor: pointer;
    user-select: none;
  }

  .item:hover {
    background-color: lightgray;
  }
    `;
    document.head.appendChild(style)();
  };
}

customElements.define('custom-form', CustomForm, {
  extends: 'form',
});

document.body.appendChild(new CustomForm());
