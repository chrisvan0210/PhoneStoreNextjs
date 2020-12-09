import { GetStaticPaths } from 'next';
import { openDB } from '../../../api/openDB';
import Index, { getStaticProps } from './index.page';

export default Index;

export {getStaticProps}

export const getStaticPaths : GetStaticPaths = async(ctx)=>{
    const db = await openDB();
    const total = (await db.get('select count(*) as total from phone')).total
    const totalOfPage = Math.ceil(total/4)

    const path = Array(totalOfPage).fill('').map((_,index)=>{
        return {
            params : {currentPage : (index+1).toString()}
        }
    })

    return{
        fallback:false,
        paths:path
    }
}