import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { GetStaticProps } from 'next';
import Link from 'next/link';
import { openDB } from '../../../api/openDB';
import { typeLaptop, typePhone } from '../../../api/typeData';
import { deepPurple } from '@material-ui/core/colors';


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
  laptopList: typeLaptop[],
  numberProps : number
}

const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Index({ laptopList,numberProps }: LaptopsProps) {
  const classes = useStyles();

  const renderPhoneCard = laptopList.map((laptop, idx) => {
    return (
      <Card key={idx} className={classes.cardWrap}>
        <CardActionArea>
          <h2 className={classes.padding5}>{laptop.brand}</h2>
          <div className={classes.padding5}>
            <Link href={`/laptops/details/${laptop.id}`}>
              <CardMedia
                className={classes.media}
                image={assetPrefix + laptop.imageUrl}
                title={laptop.model}
              />
            </Link>
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {laptop.model}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {laptop.price}$
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
            <Link href={`/laptops/details/${laptop.id}`}>
              <a>Detail</a>
            </Link>
          </Button>
        </CardActions>
      </Card>
    )
  })

  return (
    <div className={classes.root}>
      {renderPhoneCard}
    </div>

  );
}


// Phones.getInitialProps = async (ctx: NextPageContext) => {
//   const resp = await myGetApiRqAuth("http://localhost:3000/api/phonesBrands", ctx);
//   return { phoneList: resp.res }
// }


export const getStaticProps: GetStaticProps = async ctx => {
  const currentPage = ctx.params?.currentPage as string;
  const currentPageNumber = +(currentPage || 0)
  const numberProps =currentPageNumber+1

  const min = currentPageNumber * 4;
  const max = (currentPageNumber + 1) * 4

  const db = await openDB();
  // await db.migrate({
  //   force:true
  // })
  const laptopList = await db.all('SELECT * FROM Laptop WHERE id > ?  and id <= ?', min, max);
  return { props: { laptopList ,numberProps} }
}
