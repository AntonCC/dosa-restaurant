import Pasta from '../../imgs/pasta.jpg'
import Pesce from '../../imgs/pesce.jpg'
import Giardino from '../../imgs/giardino.jpg'

export const textBannerInfo = {
  title: 'Our Story',
  body: 'Dosa brings the best of Italy to Brooklyn where wood-fired seafood, hand crafted pastas, classic Italian cocktails and warm hospitality come together to create a fine dining experience. '
}

export const imgBannerInfo = [
  {
    title: 'Pasta',
    body: 'Flour. Eggs. Water. Hand crafted. Simplicity at its finest.',
    img : Pasta,
    btnText: 'View Menu',
    btnClass: 'white-outline',
    btnLink: '/menu',
    bgColor: '#757679'
  },
  {
    title: 'Pesce',
    body: 'Inspired by seaside fish restaurants in Italy. Simply grilled over wood, roasted, stewed, or preserved.',
    img : Pesce,
    btnText: 'View Menu',
    btnClass: 'white-outline',
    btnLink: '/menu',
    bgColor: '#727b4e',
    switchSide: true
  },
  {
    title: 'Giardino',
    body: 'The garden - celebrating harvest with squash, treviso, escarole',
    img : Giardino,
    btnText: 'View Menu',
    btnClass: 'white-outline',
    btnLink: '/menu',
    bgColor: '#353536'
  },
]