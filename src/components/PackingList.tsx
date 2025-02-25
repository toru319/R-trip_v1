import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

const PackingList: React.FC = () => {
  const [items, setItems] = useState([
    { name: '衣類', checked: false },
    { name: '洗面用具', checked: false },
    { name: 'パスポート', checked: false },
    { name: '財布', checked: false },
    { name: 'スマートフォン', checked: false },
    { name: 'カメラ', checked: false },
    { name: '充電器', checked: false },
    { name: '日焼け止め', checked: false },
    { name: '常備薬', checked: false },
  ]);

  const toggleItem = (index: number) => {
    const newItems = [...items];
    newItems[index].checked = !newItems[index].checked;
    setItems(newItems);
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">持ち物チェックリスト</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="flex items-center mb-2">
            <button
              onClick={() => toggleItem(index)}
              className={`w-6 h-6 mr-2 rounded-full border-2 flex items-center justify-center ${
                item.checked ? 'bg-green-500 border-green-500' : 'border-gray-400'
              }`}
            >
              {item.checked && <CheckIcon className="w-4 h-4 text-white" />}
            </button>
            <span className={item.checked ? 'line-through text-gray-500' : ''}>{item.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PackingList;
