/* eslint-disable prettier/prettier */
export interface UseCase<TModel> {
    execute(...args: any[]): Promise<TModel>;
}
