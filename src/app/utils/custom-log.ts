import colors from 'colors';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

type logType = 'info' | 'success' | 'error';

const logsTypesColorMapping: Record<logType, keyof colors.Color> = {
  info: 'blue',
  success: 'green',
  error: 'red'
}

dayjs.extend(utc);
dayjs.extend(timezone);

function customLOG(process: string, message: string, logType: logType) {
  const time = dayjs().tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss');
  const color = colors[logsTypesColorMapping[logType]];

  console.log(color(`[${time}] - [${process.toUpperCase()}] - [${message}]`));
}

export { customLOG };
