import Button from "../Button/Button"
import style from "./Showcase.module.scss"

const Showcase = () => {
  return (
    <section className={style.intro}>
      <div className={`${style.intro_container} container`}>
           <div >
            <h2>Biz bilan tomosha qiling</h2>
            <Button style={{ fontWeight: 'bold', color: "yellow", fontSize: '20px'}}>Ko'rish</Button>
           </div>
      </div>
    </section>
  )
}

export default Showcase