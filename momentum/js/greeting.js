export const greeting = document.querySelector('.greeting');
export const getTimeOfDay = () => {
  const date = new Date()
  const currentHours = date.getHours()
  if(currentHours>= 6 && currentHours <= 11 ){
    return 'morning'
  } else if(currentHours >=12 && currentHours <=17){
    return 'afternoon'
  } else if(currentHours >= 18 && currentHours <=23){
    return 'evening'
  }else if(currentHours >= 0 && currentHours <= 5){
    return 'night'
  }
}
export const showGreeting = () => {
  const timeOfDay = getTimeOfDay();
  greeting.textContent = `Good ${timeOfDay}, `
}
