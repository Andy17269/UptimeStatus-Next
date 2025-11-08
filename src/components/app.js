import { useMemo } from 'react';
import Link from './link';
import Header from './header';
import UptimeRobot from './uptimerobot';
import Package from '../../package.json';

function App() {

  const apikeys = useMemo(() => {
    const { ApiKeys } = window.Config;
    if (Array.isArray(ApiKeys)) return ApiKeys;
    if (typeof ApiKeys === 'string') return [ApiKeys];
    return [];
  }, []);
  // 自定义页脚（请保留Github项目链接）
  return (
    <>
      <Header />
      <div className='container'>
        <div id='uptime'>
          {apikeys.map((key) => (
            <UptimeRobot key={key} apikey={key} />
          ))}
        </div>
        <div id='footer'>
          <p>&copy; 2025 <Link to='https://github.com/Andy17269/UptimeStatus-Next' text='Uptime Status Next'/></p>
          <p>在 <Link to='https://github.com/Andy17269/UptimeStatus-Next' text='Github'/>↗️ 上查看此项目</p>
        </div>
      </div>
    </>
  );
}

export default App;
