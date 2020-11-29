import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { myGetApi } from '../../api/myGetApi';
import { NextPageContext } from 'next';
import { UserPerson } from '../../api/typeData';
import { Title } from '@material-ui/icons';
import Link from 'next/link';


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

export interface PhonesProps {
  phoneList: UserPerson[] | undefined
}

export default function Phones({ phoneList }: PhonesProps) {
  const classes = useStyles();

  const renderPhoneCard = phoneList.map((phone, idx) => {
    return (
      <Card key={idx} className={classes.cardWrap}>
        <CardActionArea>
          <h2 className={classes.padding5}>{phone.brand}</h2>
          <div className={classes.padding5}>
            <CardMedia
              className={classes.media}
              image={phone.imageUrl}
              title={phone.model}
            />
          </div>

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {phone.model}
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
            <Link href={`/phones/${phone.id}`}>
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


Phones.getInitialProps = async (ctx: NextPageContext) => {
  const resp = await myGetApi("http://localhost:3000/api/phonesBrands", ctx);
  return { phoneList: resp.res }
}