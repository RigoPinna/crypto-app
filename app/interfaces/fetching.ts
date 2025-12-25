export interface IResultAPI<T> {
	data: T;
	status: number;
	success: boolean;
}

export type TResponseAPI<T> = Promise<IResultAPI<T>>;
