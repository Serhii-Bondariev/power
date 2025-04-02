export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
  brand: string;
  capacity?: string;
  voltage?: string;
  features: string[];
  inStock: boolean;
}
export const products: Record<string, Product[]> = {
  powerbanks: [{
    id: "pb-1",
    name: "PowerTech X20 20000mAh",
    price: "1299 грн",
    description: "Компактний та потужний павербанк з підтримкою швидкої зарядки QC 3.0 та PD",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80",
    category: "powerbanks",
    brand: "PowerTech",
    capacity: "20000mAh",
    features: ["Quick Charge 3.0", "Power Delivery", "LED індикатор", "2 USB порти"],
    inStock: true
  }, {
    id: "pb-2",
    name: "PowerTech Slim 10000mAh",
    price: "899 грн",
    description: "Ультратонкий павербанк з алюмінієвим корпусом",
    image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80",
    category: "powerbanks",
    brand: "PowerTech",
    capacity: "10000mAh",
    features: ["Slim дизайн", "USB Type-C", "Алюмінієвий корпус"],
    inStock: true
  }, {
    id: "pb-3",
    name: "PowerTech Pro 30000mAh",
    price: "1799 грн",
    description: "Професійний павербанк з великою ємністю та дисплеєм",
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=800&q=80",
    category: "powerbanks",
    brand: "PowerTech",
    capacity: "30000mAh",
    features: ["LCD дисплей", "3 USB порти", "Швидка зарядка", "Захист від перевантаження"],
    inStock: true
  }],
  batteries: [{
    id: "bat-1",
    name: "Samsung 21700 4800mAh",
    price: "299 грн",
    description: "Високоякісний акумулятор формату 21700 з високою ємністю",
    image: "https://images.unsplash.com/photo-1612528906705-d341b4581836?auto=format&fit=crop&w=800&q=80",
    category: "batteries",
    brand: "Samsung",
    capacity: "4800mAh",
    voltage: "3.7V",
    features: ["Захист від перезаряду", "Стабільна напруга", "Довгий термін служби"],
    inStock: true
  }, {
    id: "bat-2",
    name: "LG 21700 4000mAh",
    price: "259 грн",
    description: "Надійний акумулятор з високим струмом розряду",
    image: "https://images.unsplash.com/photo-1612528906705-d341b4581836?auto=format&fit=crop&w=800&q=80",
    category: "batteries",
    brand: "LG",
    capacity: "4000mAh",
    voltage: "3.7V",
    features: ["Високий струм розряду", "Термозахист", "Швидка зарядка"],
    inStock: true
  }],
  "spare-parts": [{
    id: "sp-1",
    name: "USB Type-C роз'єм",
    price: "49 грн",
    description: "Якісний USB Type-C роз'єм для ремонту павербанків",
    image: "https://images.unsplash.com/photo-1611067974938-c5c6e8d45c46?auto=format&fit=crop&w=800&q=80",
    category: "spare-parts",
    brand: "Generic",
    features: ["Міцна конструкція", "Легке паяння", "Сумісність з більшістю плат"],
    inStock: true
  }, {
    id: "sp-2",
    name: "Контролер заряду TP4056",
    price: "29 грн",
    description: "Модуль захисту та заряду літієвих акумуляторів",
    image: "https://images.unsplash.com/photo-1611067974938-c5c6e8d45c46?auto=format&fit=crop&w=800&q=80",
    category: "spare-parts",
    brand: "Generic",
    features: ["Захист від перезаряду", "Захист від короткого замикання", "LED індикація"],
    inStock: true
  }],
  components: [{
    id: "comp-1",
    name: "DC-DC перетворювач MT3608",
    price: "39 грн",
    description: "Підвищуючий перетворювач напруги",
    image: "https://images.unsplash.com/photo-1611067974938-c5c6e8d45c46?auto=format&fit=crop&w=800&q=80",
    category: "components",
    brand: "Generic",
    features: ["Регульована напруга", "Високий ККД", "Захист від КЗ"],
    inStock: true
  }],
  "fpv-drones": [{
    id: "fpv-1",
    name: "Збірка 4S 1500mAh",
    price: "1599 грн",
    description: "Готова акумуляторна збірка для FPV дронів",
    image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&w=800&q=80",
    category: "fpv-drones",
    brand: "PowerTech",
    capacity: "1500mAh",
    voltage: "14.8V",
    features: ["4S конфігурація", "XT60 роз'єм", "Силіконові дроти", "Балансирний роз'єм"],
    inStock: true
  }],
  "3d-prints": [{
    id: "3d-1",
    name: "Корпус для павербанка",
    price: "399 грн",
    description: "Надрукований на 3D принтері корпус для саморобного павербанка",
    image: "https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?auto=format&fit=crop&w=800&q=80",
    category: "3d-prints",
    brand: "PowerTech",
    features: ["Міцний пластик", "Вентиляційні отвори", "Місце під дисплей"],
    inStock: true
  }]
};
export const categoryNames: Record<string, string> = {
  powerbanks: "Павербанки",
  batteries: "Акумулятори",
  "spare-parts": "Запчастини",
  components: "Радіодеталі",
  "fpv-drones": "Збірки для FPV дронів",
  "3d-prints": "3D друковані вироби"
};
export const categoryFilters: Record<string, any> = {
  powerbanks: {
    capacity: [{
      id: "10000",
      label: "10000 mAh",
      count: 1
    }, {
      id: "20000",
      label: "20000 mAh",
      count: 1
    }, {
      id: "30000",
      label: "30000 mAh",
      count: 1
    }],
    features: [{
      id: "qc",
      label: "Quick Charge",
      count: 2
    }, {
      id: "pd",
      label: "Power Delivery",
      count: 1
    }, {
      id: "display",
      label: "З дисплеєм",
      count: 1
    }]
  },
  batteries: {
    capacity: [{
      id: "4000",
      label: "4000 mAh",
      count: 1
    }, {
      id: "4800",
      label: "4800 mAh",
      count: 1
    }],
    brand: [{
      id: "samsung",
      label: "Samsung",
      count: 1
    }, {
      id: "lg",
      label: "LG",
      count: 1
    }]
  },
  "spare-parts": {
    type: [{
      id: "usb",
      label: "USB роз'єми",
      count: 1
    }, {
      id: "protection",
      label: "Захист",
      count: 1
    }]
  },
  components: {
    type: [{
      id: "dc-dc",
      label: "DC-DC перетворювачі",
      count: 1
    }, {
      id: "chargers",
      label: "Контролери заряду",
      count: 1
    }]
  },
  "fpv-drones": {
    voltage: [{
      id: "14.8",
      label: "14.8V (4S)",
      count: 1
    }, {
      id: "22.2",
      label: "22.2V (6S)",
      count: 0
    }],
    capacity: [{
      id: "1500",
      label: "1500 mAh",
      count: 1
    }, {
      id: "2200",
      label: "2200 mAh",
      count: 0
    }]
  },
  "3d-prints": {
    type: [{
      id: "cases",
      label: "Корпуси",
      count: 1
    }, {
      id: "holders",
      label: "Кріплення",
      count: 0
    }]
  }
};
