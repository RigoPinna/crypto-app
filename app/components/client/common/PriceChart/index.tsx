'use client';

import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

type Props = {
	data: { time: string; price: number }[];
};

export function PriceChart({ data }: Props) {
	return (
		<div className='h-52 w-full'>
			<ResponsiveContainer width='100%' height='100%'>
				<AreaChart data={data}>
					{/* 🔹 Gradiente */}
					<defs>
						<linearGradient id='priceGradient' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='0%' stopColor='#2563eb' stopOpacity={0.35} />
							<stop offset='100%' stopColor='#2563eb' stopOpacity={0} />
						</linearGradient>
					</defs>

					{/* ⏱ Tiempo abajo */}
					<XAxis dataKey='time' tick={{ fill: '#9ca3af', fontSize: 12 }} axisLine={false} tickLine={false} minTickGap={24} />

					{/* 💲 Precio derecha */}
					<YAxis
						orientation='right'
						tick={{ fill: '#9ca3af', fontSize: 12 }}
						axisLine={false}
						tickLine={false}
						domain={['dataMin', 'dataMax']}
						tickFormatter={value => `$${value.toLocaleString()}`}
					/>

					{/* Tooltip */}
					<Tooltip
						formatter={value => {
							if (typeof value !== 'number') return value;

							return [`$${value.toLocaleString()}`, 'Price'];
						}}
						labelStyle={{ color: '#9ca3af' }}
						contentStyle={{
							background: '#282828',
							borderRadius: '8px',
							border: 'none',
						}}
					/>

					{/* Área */}
					<Area type='monotone' dataKey='price' stroke='#2563eb' strokeWidth={2} fill='url(#priceGradient)' dot={false} />
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
}
