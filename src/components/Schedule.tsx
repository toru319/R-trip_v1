import React from 'react';
import { useSpring, animated, SpringValue } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

interface ScheduleItemProps {
  time: string;
  activity: string;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ time, activity }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { opacity, transform } = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
  });

  return (
    <animated.div
      ref={ref}
      style={{ opacity: opacity as SpringValue<number>, transform: transform as SpringValue<string> }}
      className="mb-4"
    >
      <p className="font-bold">{time}</p>
      <p>{activity}</p>
    </animated.div>
  );
};


const Schedule: React.FC = () => {
  const schedule = [
    { day: '1日目 (3/24)', items: [
      { time: '10:00', activity: '熱海駅到着' },
      { time: '11:00', activity: 'ホテルチェックイン' },
      { time: '12:00', activity: '昼食' },
      { time: '14:00', activity: '熱海城見学' },
      { time: '18:00', activity: '夕食' },
    ]},
    { day: '2日目 (3/25)', items: [
      { time: '9:00', activity: '朝食' },
      { time: '10:00', activity: '熱海梅園散策' },
      { time: '12:00', activity: '昼食' },
      { time: '14:00', activity: '温泉巡り' },
      { time: '18:00', activity: '夕食' },
    ]},
    { day: '3日目 (3/26)', items: [
      { time: '9:00', activity: '朝食' },
      { time: '10:00', activity: 'チェックアウト' },
      { time: '11:00', activity: 'お土産購入' },
      { time: '12:00', activity: '昼食' },
      { time: '14:00', activity: '熱海駅出発' },
    ]},
  ];


  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">旅行スケジュール</h2>
      {schedule.map((day, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-bold mb-2">{day.day}</h3>
          {day.items.map((item, itemIndex) => (
            <ScheduleItem key={itemIndex} time={item.time} activity={item.activity} />
          ))}
        </div>
      ))}
    </section>
  );
};

export default Schedule;