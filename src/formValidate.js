export const validate = (values) => {
  const {title = '', author = '', content = ''} = values;
  const errors = {};

  if (!title.trim()) {
    errors.title = 'Заполните поле заголовка!'
  };
  if (!author.trim()) {
    errors.author = 'Заполните поле автора!'
  };
  if (!content.trim()) {
    errors.content = 'Заполните поле контента!'
  }

  const raw = localStorage.getItem('posts') || '{}';
  const posts = Object.values(JSON.parse(raw));
  const postTitles = posts.map(post => post.title);
  if (postTitles.includes(title.trim())) {
    errors.title = 'Такое название записи занято.';
  };
  

  return errors;
};

export const uniq = (array) => {
  const filtered = new Set(array);
  return Array.from(filtered);
}