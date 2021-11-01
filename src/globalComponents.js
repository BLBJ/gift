import components from '@/components/global';

const globalComponents = (app) =>{
    Object.keys(components).forEach(key=>{
        app.component(key,components[key]);
    })
}

export default {
   install:globalComponents
}