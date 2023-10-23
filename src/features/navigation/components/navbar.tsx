interface Item {
  path: string;
  name: string;
}

const items: Item[] = [
  {path: '/players', name: 'Players'},
  {path: '/games', name: 'Games'},
];

export function Navbar() {
  return (
    <nav className="bg-white p-4 shadow-md">
      <ul className="flex justify-center space-x-6">
        {items.map(item => (
          <li key={item.path}>
            <a href={item.path} className="hover:font-medium hover:text-blue-600">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
