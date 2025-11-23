CREATE TABLE IF NOT EXISTS menu_categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  display_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS menu_items (
  id SERIAL PRIMARY KEY,
  category_id INT NOT NULL REFERENCES menu_categories(id),
  name VARCHAR(200) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  image_url TEXT,
  is_available BOOLEAN DEFAULT true,
  display_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS promotions (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  valid_until DATE,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO menu_categories (name, display_order) VALUES
  ('Кальяны', 1),
  ('Напитки', 2),
  ('Закуски', 3),
  ('Десерты', 4),
  ('Чаи', 5);

INSERT INTO menu_items (category_id, name, description, price, display_order) VALUES
  (1, 'Классический микс', 'Фруктовая смесь премиум табака', 1200.00, 1),
  (1, 'Ягодный взрыв', 'Насыщенный ягодный вкус', 1300.00, 2),
  (1, 'Мятная свежесть', 'Освежающая мята с холодком', 1100.00, 3),
  (2, 'Кола', 'Охлажденная кола 0.33л', 150.00, 1),
  (2, 'Сок апельсиновый', 'Свежевыжатый сок 0.25л', 200.00, 2),
  (2, 'Пиво светлое', 'Разливное пиво 0.5л', 350.00, 3),
  (3, 'Сырная тарелка', 'Ассорти из 4 видов сыра', 450.00, 1),
  (3, 'Куриные крылышки', 'Острые крылышки BBQ', 380.00, 2),
  (4, 'Чизкейк', 'Классический чизкейк New York', 320.00, 1),
  (4, 'Тирамису', 'Итальянский десерт', 350.00, 2),
  (5, 'Зеленый чай', 'Китайский зеленый чай', 250.00, 1),
  (5, 'Черный чай', 'Цейлонский черный чай', 200.00, 2);

INSERT INTO promotions (title, description, valid_until, is_active) VALUES
  ('Счастливые часы', 'Скидка 20% на все кальяны с 14:00 до 17:00', '2025-12-31', true),
  ('Второй кальян в подарок', 'При заказе двух кальянов - третий бесплатно', '2025-12-31', true);