type TIconType = {
	className?: string;
};
const Brand = () => (
	<svg xmlns='http://www.w3.org/2000/svg' width='54' height='16' fill='none' viewBox='0 0 54 16'>
		<path
			fill='currentColor'
			d='M8.327 7.575a.75.75 0 0 1 .75.75v.386h.67c.885 0 1.603.718 1.603 1.602v.569c0 .313-.092.605-.248.851.156.247.248.54.248.853v.568c0 .885-.718 1.602-1.603 1.602h-.67v.387a.75.75 0 0 1-1.5 0v-.387H6.054a.75.75 0 0 1 0-1.5h.102V10.21h-.102a.75.75 0 0 1 0-1.5h1.523v-.386a.75.75 0 0 1 .75-.75m25.078 2.59h.072l1.266-4.394h1.074l-1.494 4.716q-.293.929-.659 1.494-.36.567-.86.85-.492.284-1.186.361l-.879.098-.049-.928.811-.097q.513-.064.874-.279.367-.214.625-.64.108-.176.204-.4h-.502l-2.06-5.175h1.074zm-25.749 3.09h2.091a.103.103 0 0 0 .103-.1v-.57a.103.103 0 0 0-.103-.102h-2.09zm31.902-7.582q1.02 0 1.543.693.522.694.522 2.041 0 1.299-.522 1.968-.523.669-1.543.669-.596 0-.962-.274a1.04 1.04 0 0 1-.41-.761h-.098v3.183h-1.035V5.771h.937l.084.937h.063q.068-.488.44-.762.375-.273.98-.273M8.328 0a4.916 4.916 0 0 1 4.905 4.611 4.16 4.16 0 0 1-.739 8.251.75.75 0 0 1 0-1.5 2.658 2.658 0 0 0 .602-5.247 4.9 4.9 0 0 1-.976 1.93.75.75 0 0 1-1.156-.955 3.4 3.4 0 0 0 .766-1.862l.014-.312A3.417 3.417 0 0 0 5.093 3.82c.807.099 1.55.41 2.17.875a.75.75 0 0 1-.902 1.2A3.03 3.03 0 0 0 4.246 5.3a3.039 3.039 0 0 0 0 6.048.75.75 0 0 1-.142 1.493A4.54 4.54 0 0 1 0 8.325a4.54 4.54 0 0 1 3.515-4.42A4.92 4.92 0 0 1 8.327 0M22.19 3.915q.717 0 1.25.23.531.224.776.644l-.723.718a1.5 1.5 0 0 0-.561-.513 1.5 1.5 0 0 0-.733-.18q-.942 0-1.514.678-.566.68-.566 1.929 0 2.725 2.354 2.725.708 0 1.396-.293l.225.859a4.9 4.9 0 0 1-1.787.332q-3.233 0-3.233-3.574 0-1.695.816-2.622.815-.933 2.3-.933m22.578 1.856h2.353v.908h-2.353v2.265q0 .615.297.894.303.278.992.278.243 0 .517-.024.273-.03.625-.073l.117.908q-.34.058-.669.088-.322.03-.688.029-1.177 0-1.704-.488-.523-.489-.523-1.563V6.68h-1.298V5.77h1.298V4.208h1.036zm6.113-.098q1.08 0 1.67.703.596.698.596 1.982-.001 1.28-.596 1.983-.59.703-1.67.703-1.074 0-1.67-.703t-.596-1.983q0-1.284.596-1.982.596-.703 1.67-.703m-43.225 5.31h2.091a.103.103 0 0 0 .103-.101v-.569a.103.103 0 0 0-.103-.102h-2.09zm20.96-5.31q.8 0 1.161.459.362.458.362 1.484h-1.026q0-.567-.17-.815-.166-.25-.543-.25-.66 0-.986.567-.322.562-.322 1.602v1.318h1.27v.908h-3.458v-.908h1.153v-3.36H25.1v-.907h1.796l.175 1.328h.118q.088-1.425 1.426-1.426m10.712.879q-.61 0-.928.415-.312.415-.312 1.216v.351l.005.195q.034.658.307 1.021.318.415.928.415.625 0 .947-.444.323-.445.323-1.314 0-.918-.323-1.386-.322-.47-.947-.47m11.553.049q-.572 0-.884.459-.307.453-.307 1.298 0 .84.307 1.3.312.458.884.458.57 0 .879-.459.312-.459.312-1.299 0-.845-.312-1.298-.307-.46-.88-.46'></path>
	</svg>
);
const ArrowLeft = ({ className = 'w-2 h-auto' }: TIconType) => (
	<svg className={className} viewBox='0 0 8 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<path
			d='M6.75 0.75C6.75 0.75 0.75001 5.1689 0.75 6.75C0.74999 8.3312 6.75 12.75 6.75 12.75'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
const ArrowRight = ({ className = 'w-2 h-auto' }: TIconType) => (
	<svg className={className} viewBox='0 0 8 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<path
			d='M0.75005 0.75C0.75005 0.75 6.75 5.1689 6.75 6.75C6.75 8.3312 0.75 12.75 0.75 12.75'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
const Wind = ({ className = 'w-8 h-auto' }: TIconType) => (
	<svg xmlns='http://www.w3.org/2000/svg' className={className} fill='none' viewBox='0 0 24 24'>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth='1.5'
			d='M2 5.941c3.5 3.432 8.576 1.961 9.732 0 .17-.288.268-.623.268-.98C12 3.878 11.105 3 10 3s-2 .878-2 1.961M17 8.928C17 7.311 18.12 6 19.5 6S22 7.311 22 8.928a3.23 3.23 0 0 1-.585 1.883C19.346 14.191 9.276 12.916 4 11.856M13.085 19.887c.206.649.762 1.113 1.415 1.113.828 0 1.5-.747 1.5-1.669 0-.313-.078-.607-.213-.857C14.5 15.992 8 14.324 2 18.774'></path>
		<path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M19 15.5h2'></path>
	</svg>
);
const ArrowUp = ({ className = 'w-4 h-auto' }: TIconType) => (
	<svg xmlns='http://www.w3.org/2000/svg' className={className} fill='none' viewBox='0 0 13 13'>
		<path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M3.25.9s6.938-.542 7.915.435.435 7.915.435 7.915m-.85-7.5-10 10'></path>
	</svg>
);
const SearchCrypto = ({ className = 'w-4 h-auto' }: TIconType) => (
	<svg xmlns='http://www.w3.org/2000/svg' className={className} fill='none' viewBox='0 0 24 24'>
		<path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M17.5 17.5 22 22'></path>
		<path stroke='currentColor' strokeLinejoin='round' strokeWidth='1.5' d='M20 11a9 9 0 1 0-18 0 9 9 0 0 0 18 0Z'></path>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='1.5'
			d='M9.125 14V8M11 8V6.5m0 9V14m-1.875-3h3.75m0 0c.621 0 1.125.504 1.125 1.125v.75c0 .621-.504 1.125-1.125 1.125H8m4.875-3C13.496 11 14 10.496 14 9.875v-.75C14 8.504 13.496 8 12.875 8H8'></path>
	</svg>
);
const LayoutGrid = ({ className = 'w-4 h-auto' }: TIconType) => (
	<svg xmlns='http://www.w3.org/2000/svg' className={className} fill='none' viewBox='0 0 24 24'>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='1.5'
			d='M20.109 3.891C21.5 5.282 21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391'></path>
		<path stroke='currentColor' strokeLinecap='round' strokeWidth='1.5' d='M21.5 12h-19M12 2.5v19'></path>
	</svg>
);
const LayoutColumn = ({ className = 'w-4 h-auto' }: TIconType) => (
	<svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
		<path
			d='M20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28248 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28248 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088Z'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path d='M21.5 8.5H2.5' stroke='currentColor' strokeWidth='1.5' />
		<path d='M21.5 15.5H2.5' stroke='currentColor' strokeWidth='1.5' />
	</svg>
);

export const Icon = {
	Brand,
	ArrowRight,
	ArrowLeft,
	ArrowUp,
	SearchCrypto,
	LayoutGrid,
	LayoutColumn,
	Wind,
};
