import Dining from '../../imgs/dining-hall.jpg'
import Dish from '../../imgs/fancy-dish.jpg'

export const imgBannerInfo = [
  {
    title: 'About',
    body: 'Dosa brings the best of Italy to Brooklyn where wood-fired seafood, handcrafted pastas, classic Italian cocktails, and warm hospitality come together to create a fine dining experience.',
    img: Dining,
    btnText: 'About Us',
    btnClass: 'white-outline',
    btnLink: '/about',
    bgColor: '#757679'
  },
  {
    title: 'Menu',
    body: 'We celebrate simple ingredients and soulful cooking, honoring regional traditions and the many Italian grandmothers who cooked before us. ',
    img: Dish,
    btnText: 'View Menu',
    bgColor: '#727b4e',
    btnLink: '/menu',
    btnClass: 'white-outline',
    switchSide: true
  },
]

export const textBannerInfo = {
  title: 'Reservations',
  body: 'We look forward to welcoming you at Dosa. We accept reservations for dinner and also welcome walk-ins at our bar and a portion of the dining room. Reservations can be made by pressing the button below, or by calling us at 718-999-8888',
  btnText: 'Reservations',
  btnClass: 'black-outline',
  modalType: 'Reservation'
}