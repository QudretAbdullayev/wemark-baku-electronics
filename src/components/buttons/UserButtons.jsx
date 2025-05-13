import Basket from '@/svg/Basket'
import Heart from '@/svg/Heart'
import Profile from '@/svg/Profile'

const UserButtons = () => {
  return (
    <div className={styles.userButtons}>
        <button>
            <Compare/>
        </button>
        <button>
            <Basket/>
        </button>
        <button>
            <Heart/>
        </button>
        <button>
            <Profile/>
        </button>
    </div>
  )
}

export default UserButtons