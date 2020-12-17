import React, { useState, useRef, useEffect } from 'react';
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
import { openDB } from '../../../api/openDB';
import { typePhone } from '../../../api/typeData';
import { useRouter } from 'next/router'



const useStyles = makeStyles({
  root: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    flexDirection: "column"
  },
  phoneContainer: {
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
  },
  phone__btnActive: {
    backgroundColor: "#556cd6"
  },
  wrapBtn: {
    textAlign: "center",
    margin: "20px auto",
    display: "flex",
    '& button': {
      width: "30px",
      height: "30px",
      margin: "0 5px",
      cursor: "pointer"
    },
    '& button:first-child': {
      width: "50px"
    },
    '& button:last-child': {
      width: "50px"
    }
  }

});

export interface PhonesProps {
  phoneList: typePhone[],
  currentPageNumber: number,
  totalOfPage: number,
  id: number
}

export default function Index({ phoneList, currentPageNumber, totalOfPage }: PhonesProps) {
  const classes = useStyles();
  const [prev, setPrev] = useState(false)
  const [next, setNext] = useState(true)
  const [currentStep, setCurrentStep] = useState(currentPageNumber)
  const [pagination, setPagination] = useState(1)

  //------ 4 is a number of pages every paginations -------//
  const numberButtons = 4;
  //Control back and forward page
  useEffect(() => {
    if (currentPageNumber) {
      setCurrentStep(currentPageNumber)
      setPagination((Math.floor((currentPageNumber - 1) / numberButtons) * numberButtons) + 1)
    }
    else {
      setCurrentStep(1)
      setPagination(1)
    }
    return () => {
    }
  }, [currentPageNumber])
  // Control show hide previous and next button
  useEffect(() => {
    if (pagination <= 1) {
      setPrev(false)
    } else {
      setPrev(true)
    }
    if (pagination + numberButtons > totalOfPage) {
      setNext(false)
    } else {
      setNext(true)
    }
    return () => {
    }
  }, [pagination])


  const handleClickBtn = (id: number) => {
    setCurrentStep(id + 1);
  }
  const handlePrevious = () => {
    if (pagination <= 1) return;
    console.log("fire")
    setPagination(pagination - numberButtons)
    setCurrentStep(pagination - numberButtons);
  }
  const handleNext = () => {
    if (pagination + numberButtons > totalOfPage) return;
    setPagination(pagination + numberButtons)
    setCurrentStep(pagination + numberButtons);
  }

  const calcNum = (totalOfPage - pagination) >= numberButtons ? numberButtons : (totalOfPage % numberButtons);
  const stepArr = Array(calcNum).fill('').map((_, idx) => {
    return (
      <Link key={idx} href={`/phones/${idx + pagination}`}>
        <button onClick={() => handleClickBtn(idx + pagination - 1)} className={`${idx + pagination === currentStep ? classes.phone__btnActive : ""}`}>
          <a>{idx + pagination}</a>
        </button>
      </Link>
    )
  })

  const assetPrefix = '/PhoneStoreNextjs';

  const renderPhoneCard = phoneList.map((phone, idx) => {
    return (
      <Card key={idx} className={classes.cardWrap}>
        <CardActionArea>
          <h2 className={classes.padding5}>{phone.brand}</h2>
          <div className={classes.padding5}>
            <Link href={`/phones/details/${phone.id}`}>
              <CardMedia
                className={classes.media}
                image={assetPrefix + phone.imageUrl}
                title={phone.model}
              />
            </Link>
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {phone.model}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {phone.price}$
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
            <Link href={`/phones/details/${phone.id}`}>
              <a>Detail</a>
            </Link>
          </Button>
        </CardActions>
      </Card>
    )
  })

  return (
    <div className={classes.root}>
      <div className={classes.wrapBtn}>
        <Link href={`/phones/${pagination - 4}`}>
          <button onClick={handlePrevious} className={prev === true ? 'show' : 'hide'} disabled={!prev}>
            <a> Prev </a>
          </button>
        </Link>
        {stepArr}
        <Link href={`/phones/${pagination + 4}`}>
          <button onClick={handleNext} className={next === true ? 'show' : 'hide'} disabled={!next}>
            <a> Next </a>
          </button>
        </Link>
      </div>
      <div className={classes.phoneContainer}>{renderPhoneCard}</div>
      <div className={classes.wrapBtn}>
        <Link href={`/phones/${pagination - 4}`}>
          <button onClick={handlePrevious} className={prev === true ? 'show' : 'hide'} disabled={!prev}>
            <a> Prev </a>
          </button>
        </Link>
        {stepArr}
        <Link href={`/phones/${pagination + 4}`}>
          <button onClick={handleNext} className={next === true ? 'show' : 'hide'} disabled={!next}>
            <a> Next </a>
          </button>
        </Link>
      </div>
    </div>
  );
}


// Phones.getInitialProps = async (ctx: NextPageContext) => {
//   const resp = await myGetApiRqAuth("http://localhost:3000/api/phonesBrands", ctx);
//   return { phoneList: resp.res }
// }


export const getStaticProps: GetStaticProps = async ctx => {
  const currentPage = ctx.params?.currentPage as string;
  const currentPageNumber = +(currentPage || 1)

  const min = (currentPageNumber - 1) * 4;
  const max = (currentPageNumber) * 4

  const db = await openDB();
  const phoneList = await db.all('SELECT * FROM Phone WHERE id > ?  and id <= ?', min, max);
  const { total } = (await db.get('select count(*) as total from phone'))
  const totalOfPage = Math.ceil(total / 4)

  return { props: { phoneList, currentPageNumber, totalOfPage } }
}
