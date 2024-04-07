import css from './wishlistheader.module.css'
function Wishlistheader() {
    return (
        <div className={css.content}>
            <div className={css.parent}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
                    <path d="M13 3H15C15.5304 3 16.0391 3.21071 16.4142 3.58579C16.7893 3.96086 17 4.46957 17 5V19C17 19.5304 16.7893 20.0391 16.4142 20.4142C16.0391 20.7893 15.5304 21 15 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V5C1 4.46957 1.21071 3.96086 1.58579 3.58579C1.96086 3.21071 2.46957 3 3 3H5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 1H6C5.44772 1 5 1.44772 5 2V4C5 4.55228 5.44772 5 6 5H12C12.5523 5 13 4.55228 13 4V2C13 1.44772 12.5523 1 12 1Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className={css.categor}>category</p>
                <i class="fa fa-chevron-down" aria-hidden="true" style={{color:"white" , fontSize:'17px'}}></i>
            </div>
        </div>
    )
}
export default Wishlistheader