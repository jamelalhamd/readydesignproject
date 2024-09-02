const errorcontroller = (req, res) => {
  
  const data={title:'404' ,user: req.user};
  res.render('home',{data: data});
 }

const addcontroller = (req, res) => {  
  console.log("add")
  const data={title:'add' ,user: req.user};
  res.render('home',{data: data});
}

const covercontroller = (req, res) => { 
  console.log("cover");
   res.render("cover");
 }


const dashcontroller = (req, res) => {
      const data={title:'dashboard' ,user: req.user};
res.render('home',{data: data});
 }

const editcontroller = (req, res) => { 
  const data={title:'edit' ,user: req.user};
res.render('home',{data: data});
 }
const homecontroller = (req, res) => { 
    const data=null
res.render('home',{data: data}); 
}
const viewcontroller = (req, res) => {
  const data={title:'view' ,user: req.user};
res.render('home',{data: data}); 
}

module.exports = {
    errorcontroller,
    addcontroller,
    covercontroller,
    dashcontroller,
    editcontroller,
    homecontroller,
    viewcontroller
};
