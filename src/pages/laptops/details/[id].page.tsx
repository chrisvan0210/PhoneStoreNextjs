import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { typeLaptop } from '../../../../api/typeData';
import { openDB } from '../../../../api/openDB';

import {useRouter} from 'next/router'


const useStyles = makeStyles({
    root: {
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
    },
    cardWrap: {
        margin: ' 5px 0',
        width: "280px",
        "@media(max-width:1200px)": {
            width: "unset",
            flexBasis: "48%"
        },
        "@media(max-width:600px)": {
            width: "unset",
            flexBasis: "98%"
        }
    },
    media: {
        height: 250,
        backgroundSize: "contain"
    },
    padding5: {
        padding: '5px'
    }
});

export interface LaptopsProps {
    Laptop: typeLaptop[] | undefined

}

export default function Phones({ Laptop }: LaptopsProps) {
    const classes = useStyles();
    const router = useRouter();
    if(router.isFallback){
        return(
            <div>Loading...................</div>
        )
    }
    return (
        <div className={classes.root}>
            <Card className={classes.cardWrap}>
                <CardActionArea>
                    <h2 className={classes.padding5}>{Laptop[0].brand}</h2>
                    <div className={classes.padding5}>
                        <CardMedia
                            className={classes.media}
                            image={Laptop[0].imageUrl}
                            title={Laptop[0].model}
                        />
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {Laptop[0].model}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        <Link href={`/phones`}>
                            <a>Back</a>
                        </Link>
                    </Button>
                </CardActions>
            </Card>

        </div>

    );
}
// Phones.getInitialProps = async (ctx: NextPageContext) => {
//     const resp = await myGetApiRqAuth(`http://localhost:3000/api/phonesBrands/${ctx.query.id}`, ctx);
//     return { Phone: resp.res }
// }

// Phones.getInitialProps = async (ctx: NextPageContext) => {
//     console.log("id", ctx.query.id)
//     const resp = await myGetData(`http://localhost:3000/api/phonesBrands/${ctx.query.id}`);
//     return { Phone: resp.res }
// }

export const getStaticProps: GetStaticProps= async ctx => {
    const id = ctx.params?.id as string;

    const db = await openDB();
    const Laptop = await db.all('SELECT * FROM Laptop where id=?', +id);
    return { props: { Laptop } }
}

export const getStaticPaths : GetStaticPaths<{id:string}> = async()=>{
    const db = await openDB();
    const allLaptops = await db.all('SELECT * FROM Laptop ');
    const paths = allLaptops.map(latop=>{
        return {params: {id: latop.id.toString() }};
    })
    return {
        fallback: false,
        paths:paths
        // paths:[{params:{id:'1'}},{params: {id:'2'}}]
    }
}