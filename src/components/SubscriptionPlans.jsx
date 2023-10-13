import React from 'react'
import styles from './SubscriptionPlans.module.css'

const SubscriptionPlans = () => {
  return (
    <div className={styles.subscriptionPlans}>
        <div className={styles.content}>
            <div className={styles.grayPlan}>
                <h2 className={`h2 ${styles.heading}`}>Basic</h2>
                <p className={`p opacity60pct ${styles.paragraph}`}>
                    Includes basic usage of our platform. Recommended for new and aspiring photographers.
                </p>
                <p className='h1'>$19.00</p>
                <p className={`p opacity60pct ${styles.paragraph}`}>per month</p>
                <button className={`button1 h4 ${styles.button}`}>Pick Plan</button>
            </div>
            <div className={styles.blackPlan}>
                <h2 className={`h2 ${styles.headingPro}`}>Pro</h2>
                <p className={`p opacity60pct ${styles.paragraph}`}>
                    More advanced features available. Recommended for photography veterans and professionals.
                </p>
                <p className='h1'>$39.00</p>
                <p className={`p opacity60pct ${styles.paragraph}`}>per month</p>
                <button className={`button2 h4 ${styles.button}`}>Pick Plan</button>
            </div>

            <div className={styles.grayPlan}>
                <h2 className={`h2 ${styles.heading}`}>Business</h2>
                <p className={`p opacity60pct ${styles.paragraph}`}>
                    Additional features available such as more detailed metrics. Recommended for business owners.
                </p>
                <p className='h1'>$99.00</p>
                <p className={`p opacity60pct ${styles.paragraph}`}>per month</p>
                <button className={`button1 h4 ${styles.button}`}>Pick Plan</button>
            </div>
        </div>
    </div>
  )
}

export default SubscriptionPlans
