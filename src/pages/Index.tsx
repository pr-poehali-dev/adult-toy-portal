import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'catalog'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'Все товары', icon: 'Grid3x3' },
    { id: 'wellness', name: 'Wellness', icon: 'Sparkles' },
    { id: 'luxury', name: 'Премиум', icon: 'Crown' },
    { id: 'couples', name: 'Для двоих', icon: 'Heart' },
    { id: 'new', name: 'Новинки', icon: 'Star' },
  ];

  const products = [
    {
      id: 1,
      name: 'Elegance Pro',
      category: 'luxury',
      price: '12 990',
      image: 'https://cdn.poehali.dev/projects/99893a96-95b1-49a2-bba4-4738032ba3da/files/7f7b841a-a3b1-40c2-9b88-5cfa5beb7c7b.jpg',
      badge: 'Premium',
      description: 'Роскошный дизайн для особых моментов'
    },
    {
      id: 2,
      name: 'Harmony Wellness',
      category: 'wellness',
      price: '8 490',
      image: 'https://cdn.poehali.dev/projects/99893a96-95b1-49a2-bba4-4738032ba3da/files/9b6b9080-8961-4ac6-9971-89dac22296e7.jpg',
      badge: 'Популярное',
      description: 'Забота о себе каждый день'
    },
    {
      id: 3,
      name: 'Connection Duo',
      category: 'couples',
      price: '15 990',
      image: 'https://cdn.poehali.dev/projects/99893a96-95b1-49a2-bba4-4738032ba3da/files/1ff9f8f7-7895-4c4b-81a5-26df8f0e63cd.jpg',
      badge: 'Новинка',
      description: 'Сближайтесь на новом уровне'
    },
    {
      id: 4,
      name: 'Pure Bliss',
      category: 'wellness',
      price: '6 990',
      image: 'https://cdn.poehali.dev/projects/99893a96-95b1-49a2-bba4-4738032ba3da/files/7f7b841a-a3b1-40c2-9b88-5cfa5beb7c7b.jpg',
      badge: 'Хит продаж',
      description: 'Простота и удовольствие'
    },
    {
      id: 5,
      name: 'Luxury Edition',
      category: 'luxury',
      price: '24 990',
      image: 'https://cdn.poehali.dev/projects/99893a96-95b1-49a2-bba4-4738032ba3da/files/9b6b9080-8961-4ac6-9971-89dac22296e7.jpg',
      badge: 'Эксклюзив',
      description: 'Безупречное качество и стиль'
    },
    {
      id: 6,
      name: 'Intimate Joy',
      category: 'couples',
      price: '11 490',
      image: 'https://cdn.poehali.dev/projects/99893a96-95b1-49a2-bba4-4738032ba3da/files/1ff9f8f7-7895-4c4b-81a5-26df8f0e63cd.jpg',
      badge: 'Новинка',
      description: 'Откройте новые грани близости'
    },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Pleasure Lab</h1>
            <nav className="hidden md:flex gap-8">
              <button 
                onClick={() => setActiveSection('home')}
                className={`text-sm font-medium transition-colors hover:text-accent ${activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Главная
              </button>
              <button 
                onClick={() => setActiveSection('catalog')}
                className={`text-sm font-medium transition-colors hover:text-accent ${activeSection === 'catalog' ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Каталог
              </button>
            </nav>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="ShoppingCart" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {activeSection === 'home' && (
        <>
          <section className="relative bg-gradient-to-br from-secondary to-background py-24 md:py-32 animate-fade-in">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <Badge className="mb-6 bg-accent/10 text-accent hover:bg-accent/20">
                  Премиум качество
                </Badge>
                <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
                  Откройте мир<br />настоящего удовольствия
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Элегантные решения для взрослых. Дискретная доставка. Безопасность и качество на первом месте.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => setActiveSection('catalog')}
                  >
                    Смотреть каталог
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                  <Button size="lg" variant="outline">
                    О нас
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Категории</h3>
                <p className="text-muted-foreground text-lg">Найдите то, что подходит именно вам</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {categories.filter(cat => cat.id !== 'all').map((category, index) => (
                  <Card 
                    key={category.id}
                    className="p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1 animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setActiveSection('catalog');
                    }}
                  >
                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Icon name={category.icon as any} size={28} className="text-accent" />
                    </div>
                    <h4 className="font-semibold text-lg">{category.name}</h4>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                    <Icon name="Shield" size={28} className="text-accent" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">100% Конфиденциально</h4>
                  <p className="text-muted-foreground">Дискретная упаковка и доставка</p>
                </div>
                <div className="text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                    <Icon name="Truck" size={28} className="text-accent" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Быстрая доставка</h4>
                  <p className="text-muted-foreground">По Москве за 24 часа</p>
                </div>
                <div className="text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                    <Icon name="Award" size={28} className="text-accent" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Премиум качество</h4>
                  <p className="text-muted-foreground">Только сертифицированные товары</p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeSection === 'catalog' && (
        <section className="py-16 animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary text-center">Каталог</h2>
              
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(category.id)}
                    className="gap-2"
                  >
                    <Icon name={category.icon as any} size={18} />
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filteredProducts.map((product, index) => (
                <Card 
                  key={product.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-square overflow-hidden bg-secondary">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-xl">{product.name}</h3>
                      <Badge variant="secondary" className="bg-accent/10 text-accent">
                        {product.badge}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                      <Button className="bg-accent hover:bg-accent/90">
                        <Icon name="ShoppingCart" size={18} className="mr-2" />
                        В корзину
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="bg-primary text-primary-foreground py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">Pleasure Lab</h3>
              <p className="text-sm opacity-90">Премиум товары для взрослых</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">О нас</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>О компании</li>
                <li>Доставка</li>
                <li>Оплата</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Помощь</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Контакты</li>
                <li>FAQ</li>
                <li>Возврат</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Подписка</h4>
              <p className="text-sm opacity-90 mb-3">Новинки и акции</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="px-3 py-2 rounded bg-white/10 text-sm flex-1 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button size="sm" variant="secondary">
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
            © 2024 Pleasure Lab. Только для лиц старше 18 лет.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
