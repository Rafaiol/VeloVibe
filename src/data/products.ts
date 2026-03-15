export interface Product {
  id: string;
  name: string;
  category: 'mountain' | 'road' | 'city' | 'carbon' | 'e-bike';
  price: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  colors: string[];
  specs: {
    frame: string;
    fork: string;
    drivetrain: string;
    brakes: string;
    wheels: string;
    weight: string;
  };
  geometry: {
    size: string;
    seatTube: string;
    topTube: string;
    headTube: string;
    chainstay: string;
    wheelbase: string;
  }[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Specialized Stumpjumper EVO',
    category: 'mountain',
    price: 5200,
    rating: 4.9,
    reviews: 128,
    image: '/bikes/mountain-bike.png',
    description: 'The Stumpjumper EVO is a testament to full-gas trail performance. With its dialed geometry, plush suspension, and unmatched versatility, this bike is ready to tackle any trail you throw at it.',
    colors: ['#F5F0E8', '#1A1A1A', '#F97316'],
    specs: {
      frame: 'FACT 11m Carbon',
      fork: 'Fox Float 38 Performance Elite',
      drivetrain: 'SRAM GX Eagle 12-speed',
      brakes: 'SRAM Code RSC 4-piston',
      wheels: 'Roval Traverse 29" Alloy',
      weight: '14.2 kg'
    },
    geometry: [
      { size: 'S1', seatTube: '400mm', topTube: '572mm', headTube: '95mm', chainstay: '438mm', wheelbase: '1194mm' },
      { size: 'S2', seatTube: '420mm', topTube: '598mm', headTube: '105mm', chainstay: '438mm', wheelbase: '1220mm' },
      { size: 'S3', seatTube: '440mm', topTube: '624mm', headTube: '115mm', chainstay: '438mm', wheelbase: '1246mm' },
      { size: 'S4', seatTube: '465mm', topTube: '650mm', headTube: '125mm', chainstay: '438mm', wheelbase: '1272mm' },
    ]
  },
  {
    id: '2',
    name: 'Specialized Turbo Vado SL',
    category: 'e-bike',
    price: 4800,
    rating: 4.8,
    reviews: 96,
    image: '/bikes/hero-bike.png',
    description: 'The Turbo Vado SL is a lightweight electric bike that delivers a natural riding experience with just the right amount of power to make your ride easier and more enjoyable.',
    colors: ['#1A1A1A', '#F97316', '#F5F0E8'],
    specs: {
      frame: 'E5 Aluminum',
      fork: 'Future Shock 1.5',
      drivetrain: 'Shimano Deore 10-speed',
      brakes: 'Shimano MT200 Hydraulic',
      wheels: '700c Alloy',
      weight: '17.5 kg'
    },
    geometry: [
      { size: 'S', seatTube: '400mm', topTube: '550mm', headTube: '110mm', chainstay: '450mm', wheelbase: '1060mm' },
      { size: 'M', seatTube: '450mm', topTube: '575mm', headTube: '125mm', chainstay: '450mm', wheelbase: '1085mm' },
      { size: 'L', seatTube: '500mm', topTube: '600mm', headTube: '140mm', chainstay: '450mm', wheelbase: '1110mm' },
    ]
  },
  {
    id: '3',
    name: 'Specialized Tarmac SL8',
    category: 'road',
    price: 6800,
    rating: 5.0,
    reviews: 156,
    image: '/bikes/road-bike.png',
    description: 'The Tarmac SL8 is the culmination of decades of racing expertise. With unmatched aerodynamics, lightweight construction, and razor-sharp handling, this is the ultimate race machine.',
    colors: ['#F97316', '#1A1A1A', '#F5F0E8'],
    specs: {
      frame: 'FACT 12r Carbon',
      fork: 'S-Works FACT Carbon',
      drivetrain: 'Shimano Dura-Ace Di2',
      brakes: 'Shimano Dura-Ace Hydraulic',
      wheels: 'Roval Rapide CLX II',
      weight: '6.8 kg'
    },
    geometry: [
      { size: '49', seatTube: '440mm', topTube: '515mm', headTube: '100mm', chainstay: '410mm', wheelbase: '970mm' },
      { size: '52', seatTube: '470mm', topTube: '535mm', headTube: '115mm', chainstay: '410mm', wheelbase: '985mm' },
      { size: '54', seatTube: '490mm', topTube: '550mm', headTube: '130mm', chainstay: '410mm', wheelbase: '1000mm' },
      { size: '56', seatTube: '510mm', topTube: '565mm', headTube: '145mm', chainstay: '410mm', wheelbase: '1015mm' },
    ]
  },
  {
    id: '4',
    name: 'Specialized Sirrus X',
    category: 'city',
    price: 1200,
    rating: 4.7,
    reviews: 84,
    image: '/bikes/city-bike.png',
    description: 'The Sirrus X is your ticket to riding more. Comfortable, efficient, and versatile, this bike is perfect for commuting, fitness rides, or just exploring your city.',
    colors: ['#1A1A1A', '#2D2D2D', '#F97316'],
    specs: {
      frame: 'A1 Premium Aluminum',
      fork: 'Steel',
      drivetrain: 'MicroSHIFT 8-speed',
      brakes: 'Tektro Hydraulic Disc',
      wheels: '700c Alloy',
      weight: '11.2 kg'
    },
    geometry: [
      { size: 'XS', seatTube: '360mm', topTube: '520mm', headTube: '110mm', chainstay: '435mm', wheelbase: '1020mm' },
      { size: 'S', seatTube: '400mm', topTube: '540mm', headTube: '120mm', chainstay: '435mm', wheelbase: '1040mm' },
      { size: 'M', seatTube: '450mm', topTube: '560mm', headTube: '135mm', chainstay: '435mm', wheelbase: '1060mm' },
      { size: 'L', seatTube: '500mm', topTube: '580mm', headTube: '150mm', chainstay: '435mm', wheelbase: '1080mm' },
    ]
  },
  {
    id: '5',
    name: 'Specialized Rockhopper',
    category: 'mountain',
    price: 950,
    rating: 4.6,
    reviews: 72,
    image: '/bikes/mountain-bike.png',
    description: 'The Rockhopper is the perfect entry into mountain biking. With reliable components and a capable geometry, this bike will have you exploring trails in no time.',
    colors: ['#F5F0E8', '#1A1A1A', '#F97316'],
    specs: {
      frame: 'A1 Aluminum',
      fork: 'SR Suntour XCM',
      drivetrain: 'Shimano Altus 9-speed',
      brakes: 'Tektro M275 Hydraulic',
      wheels: '27.5" Alloy',
      weight: '13.8 kg'
    },
    geometry: [
      { size: 'XS', seatTube: '350mm', topTube: '540mm', headTube: '95mm', chainstay: '425mm', wheelbase: '1040mm' },
      { size: 'S', seatTube: '380mm', topTube: '565mm', headTube: '100mm', chainstay: '425mm', wheelbase: '1065mm' },
      { size: 'M', seatTube: '420mm', topTube: '590mm', headTube: '110mm', chainstay: '425mm', wheelbase: '1090mm' },
      { size: 'L', seatTube: '460mm', topTube: '615mm', headTube: '120mm', chainstay: '425mm', wheelbase: '1115mm' },
    ]
  },
  {
    id: '6',
    name: 'Specialized Allez Sprint',
    category: 'road',
    price: 2800,
    rating: 4.8,
    reviews: 112,
    image: '/bikes/road-bike.png',
    description: 'The Allez Sprint is the fastest alloy road bike ever made. With aerodynamic tube shaping and race-ready geometry, this bike delivers pro-level performance at an accessible price.',
    colors: ['#F97316', '#1A1A1A', '#F97316'],
    specs: {
      frame: 'E5 Premium Aluminum',
      fork: 'FACT Carbon',
      drivetrain: 'Shimano 105 11-speed',
      brakes: 'Shimano 105 Hydraulic',
      wheels: 'DT R470 Alloy',
      weight: '8.9 kg'
    },
    geometry: [
      { size: '49', seatTube: '440mm', topTube: '515mm', headTube: '100mm', chainstay: '408mm', wheelbase: '970mm' },
      { size: '52', seatTube: '470mm', topTube: '535mm', headTube: '115mm', chainstay: '408mm', wheelbase: '985mm' },
      { size: '54', seatTube: '490mm', topTube: '550mm', headTube: '130mm', chainstay: '408mm', wheelbase: '1000mm' },
      { size: '56', seatTube: '510mm', topTube: '565mm', headTube: '145mm', chainstay: '408mm', wheelbase: '1015mm' },
    ]
  },
  {
    id: '7',
    name: 'Specialized Diverge',
    category: 'road',
    price: 3200,
    rating: 4.9,
    reviews: 88,
    image: '/bikes/road-bike.png',
    description: 'The Diverge is the ultimate gravel bike. With massive tire clearance, Future Shock suspension, and versatile geometry, this bike can handle any road or trail you encounter.',
    colors: ['#1A1A1A', '#1A1A1A', '#2D2D2D'],
    specs: {
      frame: 'FACT 9r Carbon',
      fork: 'Future Shock 1.5',
      drivetrain: 'SRAM Rival 1x12',
      brakes: 'SRAM Rival Hydraulic',
      wheels: 'Pathfinder Pro 42mm',
      weight: '9.2 kg'
    },
    geometry: [
      { size: '49', seatTube: '440mm', topTube: '520mm', headTube: '100mm', chainstay: '425mm', wheelbase: '990mm' },
      { size: '52', seatTube: '470mm', topTube: '540mm', headTube: '115mm', chainstay: '425mm', wheelbase: '1010mm' },
      { size: '54', seatTube: '490mm', topTube: '560mm', headTube: '130mm', chainstay: '425mm', wheelbase: '1030mm' },
      { size: '56', seatTube: '510mm', topTube: '580mm', headTube: '145mm', chainstay: '425mm', wheelbase: '1050mm' },
    ]
  },
  {
    id: '8',
    name: 'Carbon Elite Evo',
    category: 'carbon',
    price: 4500,
    rating: 4.9,
    reviews: 45,
    image: '/bikes/carbon-bike.png',
    description: 'The Carbon Elite Evo is our flagship performance machine. Built with an ultra-light FACT carbon frame, it offers unmatched stiffness-to-weight ratio for the most demanding riders.',
    colors: ['#1A1A1A', '#F97316', '#F5F0E8'],
    specs: {
      frame: 'FACT 12r Carbon',
      fork: 'S-Works FACT Carbon',
      drivetrain: 'Shimano Dura-Ace Di2',
      brakes: 'Shimano Dura-Ace Hydraulic',
      wheels: 'Roval Rapide CLX II',
      weight: '6.5 kg'
    },
    geometry: [
      { size: 'S', seatTube: '400mm', topTube: '520mm', headTube: '100mm', chainstay: '410mm', wheelbase: '970mm' },
      { size: 'M', seatTube: '450mm', topTube: '550mm', headTube: '120mm', chainstay: '410mm', wheelbase: '1000mm' },
      { size: 'L', seatTube: '500mm', topTube: '580mm', headTube: '140mm', chainstay: '410mm', wheelbase: '1030mm' },
    ]
  },
  {
    id: '9',
    name: 'Specialized Como SL',
    category: 'e-bike',
    price: 4200,
    rating: 4.7,
    reviews: 62,
    image: '/bikes/city-bike.png',
    description: 'The Como SL is a lightweight, stylish e-bike perfect for urban commuting. With its clean design and powerful motor, getting around town has never been easier or more fun.',
    colors: ['#1A1A1A', '#F5F0E8', '#F97316'],
    specs: {
      frame: 'E5 Aluminum',
      fork: 'Steel',
      drivetrain: 'Shimano Nexus 5-speed',
      brakes: 'Shimano MT200 Hydraulic',
      wheels: '700c Alloy',
      weight: '22.0 kg'
    },
    geometry: [
      { size: 'S', seatTube: '420mm', topTube: '550mm', headTube: '120mm', chainstay: '460mm', wheelbase: '1080mm' },
      { size: 'M', seatTube: '470mm', topTube: '575mm', headTube: '135mm', chainstay: '460mm', wheelbase: '1105mm' },
      { size: 'L', seatTube: '520mm', topTube: '600mm', headTube: '150mm', chainstay: '460mm', wheelbase: '1130mm' },
    ]
  },
];

export const categories = [
  { id: 'mountain', name: 'Mountain Bikes', image: '/images/mountain-ride.jpg' },
  { id: 'road', name: 'Road Bikes', image: '/images/road-ride.jpg' },
  { id: 'city', name: 'City Bikes', image: '/images/city-ride.jpg' },
  { id: 'carbon', name: 'Carbon Bikes', image: '/bikes/carbon-bike.png' },
  { id: 'e-bike', name: 'E-Bikes', image: '/bikes/hero-bike.png' },
];

export const reviews = [
  {
    id: '1',
    name: 'Alex Hilson',
    avatar: '/images/team-1.jpg',
    rating: 5,
    text: 'Go further than you ever imagined. Every bike here is not just a means of transportation, but the beginning of an epic journey. The quality and service exceeded all my expectations!'
  },
  {
    id: '2',
    name: 'Sarah Mitchell',
    avatar: '/images/team-2.jpg',
    rating: 5,
    text: 'The team at VeloVibe helped me find the perfect bike for my daily commute. The attention to detail and customer service is unmatched. Highly recommend!'
  },
  {
    id: '3',
    name: 'Marcus Chen',
    avatar: '/images/team-3.jpg',
    rating: 5,
    text: 'From mountains to city streets, my Stumpjumper handles everything I throw at it. The buying experience was smooth and the staff truly knows their stuff.'
  },
  {
    id: '4',
    name: 'Emma Rodriguez',
    avatar: '/images/team-2.jpg',
    rating: 5,
    text: 'Best bike shop in the city! The test ride program made all the difference in finding my perfect match. Will definitely be coming back for all my cycling needs.'
  },
];

export const stats = [
  { value: '+4500', label: 'Customers around the world' },
  { value: '+500', label: 'Bicycles in our shop' },
  { value: '+12', label: 'Years of experience' },
];
