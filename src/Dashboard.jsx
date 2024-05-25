import { Add, KeyboardArrowDown, KeyboardArrowUp, Remove } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { BarChart, Gauge, LineChart, PieChart, gaugeClasses, lineElementClasses, pieArcLabelClasses } from '@mui/x-charts';

const Dashboard = () => {

    const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
    const xLabels = [
        'Page A',
        'Page B',
        'Page C',
        'Page D',
        'Page E',
        'Page F',
        'Page G',
    ];

    const data = [
        { label: 'Group A', value: 400, color: '#0088FE' },
        { label: 'Group B', value: 300, color: '#00C49F' },
        { label: 'Group C', value: 300, color: '#FFBB28' },
        { label: 'Group D', value: 200, color: '#FF8042' },
    ];

    const sizing = {
        margin: { right: 1 },
        width: 300,
        height: 300,
        legend: { hidden: true },
    };
    const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

    const getArcLabel = (params) => {
        const percent = params.value / TOTAL;
        return `${(percent * 100).toFixed(0)}%`;
    };

    return (
        <Box px={4} py={2}>
            <Typography fontSize={30} fontWeight={800} fontFamily={'serif'}>Dashboard</Typography>

            {/* Small Data view */}
            <Box display="flex" flex={1} justifyContent={"space-between"} alignItems={"center"} mt={4}>
                <Box pl={2} py={1} sx={{
                    backgroundColor: 'white', borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px', borderBottomLeftRadius: '4px', borderBottomRightRadius: '4px'
                }}
                    width={'16%'} borderBottom={"4px solid #4ade80"}>
                    <Typography color={'#9ca3af'} lineHeight={1.1} fontSize={20} fontFamily={'serif'}>Title</Typography>
                    <Box display={"flex"} alignItems={"center"}>
                        <KeyboardArrowUp fontSize='large' sx={{ fill: '#4ade80' }} />
                        <Typography fontSize={22} fontWeight={600} ml={1} fontFamily={'serif'}>234
                            <span style={{ color: '#9ca3af' }}>%</span></Typography>
                        <Gauge width={50} height={50} value={60} sx={{
                            fontSize: '0.8rem', fontWeight: 'bold', ml: 2, fontFamily: 'serif', [`& .${gaugeClasses.valueArc}`]: {
                                fill: '#4ade80',
                            }
                        }} />
                    </Box>
                </Box>
                <Box pl={2} py={1} sx={{
                    backgroundColor: 'white', borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px', borderBottomLeftRadius: '4px', borderBottomRightRadius: '4px'
                }}
                    width={'16%'} borderBottom={"4px solid #dc2626"}>
                    <Typography color={'#9ca3af'} lineHeight={1.1} fontSize={20} fontFamily={'serif'}>Title</Typography>
                    <Box display={"flex"} alignItems={"center"}>
                        <KeyboardArrowDown fontSize='large' sx={{ fill: '#dc2626' }} />
                        <Typography fontSize={22} fontWeight={600} ml={1} fontFamily={'serif'}>234
                            <span style={{ color: '#9ca3af' }}>%</span></Typography>
                        <Gauge width={50} height={50} value={40} sx={{
                            fontSize: '0.8rem', fontWeight: 'bold', ml: 2, fontFamily: 'serif', [`& .${gaugeClasses.valueArc}`]: {
                                fill: '#dc2626',
                            }
                        }} />
                    </Box>
                </Box>
                <Box pl={2} py={1} sx={{
                    backgroundColor: 'white', borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px', borderBottomLeftRadius: '4px', borderBottomRightRadius: '4px'
                }}
                    width={'16%'} borderBottom={"4px solid #2563eb"}>
                    <Typography color={'#9ca3af'} lineHeight={1.1} fontSize={20} fontFamily={'serif'}>Title</Typography>
                    <Box display={"flex"} alignItems={"center"}>
                        <Add fontSize='large' sx={{ fill: '#2563eb' }} />
                        <Typography fontSize={22} fontWeight={600} ml={1} fontFamily={'serif'}>234
                            <span style={{ color: '#9ca3af' }}>%</span></Typography>
                        <Gauge width={50} height={50} value={70} sx={{
                            fontSize: '0.8rem', fontWeight: 'bold', ml: 2, fontFamily: 'serif', [`& .${gaugeClasses.valueArc}`]: {
                                fill: '#2563eb',
                            }
                        }} />
                    </Box>
                </Box>
                <Box pl={2} py={1} sx={{
                    backgroundColor: 'white', borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px', borderBottomLeftRadius: '4px', borderBottomRightRadius: '4px'
                }}
                    width={'16%'} borderBottom={"4px solid #fde047"}>
                    <Typography color={'#9ca3af'} lineHeight={1.1} fontSize={20} fontFamily={'serif'}>Title</Typography>
                    <Box display={"flex"} alignItems={"center"}>
                        <Remove fontSize='large' sx={{ fill: '#fde047' }} />
                        <Typography fontSize={22} fontWeight={600} ml={1} fontFamily={'serif'}>234
                            <span style={{ color: '#9ca3af' }}>%</span></Typography>
                        <Gauge width={50} height={50} value={30} sx={{
                            fontSize: '0.8rem', fontWeight: 'bold', ml: 2, fontFamily: 'serif', [`& .${gaugeClasses.valueArc}`]: {
                                fill: '#fde047',
                            }
                        }} />
                    </Box>
                </Box>
            </Box>

            {/* Charts */}
            <Box display={'flex'} mt={5}>
                <Box sx={{ backgroundColor: 'white' }} flex={1} justifyContent={'center'} alignItems={'center'} p={2} borderRadius={'10px'}>
                    <Typography fontSize={25} fontWeight={700} fontFamily={'serif'}>Title</Typography>
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <BarChart
                            width={500}
                            height={500}
                            series={[
                                { data: pData, label: 'pv', id: 'pvId', stack: 'total' },
                                // { data: uData, label: 'uv', id: 'uvId', stack: 'total' },
                            ]}
                            xAxis={[{ data: xLabels, scaleType: 'band' }]}
                        />
                    </Box>
                </Box>
                <Box mx={5} />

                <Box flex={1} justifyContent={'center'} alignItems={'center'}>
                    <Box sx={{ backgroundColor: 'white', }} mb={2} p={1} borderRadius={'10px'}>
                        <Typography fontSize={25} fontWeight={700} fontFamily={'serif'}>Title</Typography>
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <PieChart
                                series={[
                                    {
                                        outerRadius: 100,
                                        data,
                                        arcLabel: getArcLabel,
                                    },
                                ]}
                                sx={{
                                    [`& .${pieArcLabelClasses.root}`]: {
                                        fill: 'white',
                                        fontSize: 14,
                                    },
                                }}
                                {...sizing}
                            />
                        </Box>
                    </Box>

                    <Box sx={{ backgroundColor: 'white', }} p={1} borderRadius={'10px'}>
                        <Typography fontSize={25} fontWeight={700} fontFamily={'serif'}>Title</Typography>
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <LineChart
                                width={500}
                                height={300}
                                series={[{ data: pData, label: 'uv', area: true, showMark: false }]}
                                xAxis={[{ scaleType: 'point', data: xLabels }]}
                                sx={{
                                    [`& .${lineElementClasses.root}`]: {
                                        display: 'none',
                                    },
                                }}
                            />
                        </Box>
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default Dashboard