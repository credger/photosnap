import styles from './Compare.module.css'
import React from 'react'
import check from '../assets/pricing/desktop/check.svg'

const Compare = () => {
  return (
    <div className={styles.compare}>
        <h1 className={styles.heading}>Compare</h1>
        <div className={styles.chart}>
            <div className={`${styles.row1}`}>
                <p className={`h4 ${styles.feature} ${styles.gridColumn1}`}>The Features</p>
                <p className={`h4 ${styles.feature} ${styles.gridColumn2} `}>Basic</p>
                <p className={`h4 ${styles.feature} ${styles.gridColumn3} `}>Pro</p>
                <p className={`h4 ${styles.feature} ${styles.gridColumn4} `}>Business</p>
            </div>
            <p className={`h4 ${styles.row1Mobile}`}>The Features</p>
            <hr className={styles.lineBlack}/>
            <div className={styles.row}>
                <p className={`h4 ${styles.feature} ${styles.gridColumn1}`}>Unlimited story posting</p>
                <div className={styles.chartElement}>
                    <p className={styles.mobileLabel}>Basic</p>
                    <img src={check} alt='check' width='18' height='15' className={styles.gridColumn2} />
                </div>
                <div className={styles.chartElement}>
                    <p className={styles.mobileLabel} >Pro</p>
                    <img src={check} alt='check' width='18' height='15' className={styles.gridColumn3} />
                </div>
                <div className={styles.chartElement}>
                    <p className={styles.mobileLabel} >Business</p>
                    <img src={check} alt='check' width='18' height='15' className={styles.gridColumn4} />
                </div>
            </div>
            <hr className={styles.lineGray}/>
            <div className={styles.row}>
                <p className={`h4 ${styles.feature} ${styles.gridColumn1}`}>Unlimited photo upload</p>
                <div className={styles.chartElement}>
                    <p className={styles.mobileLabel}>Basic</p>
                    <img src={check} alt='check' width='18' height='15' className={styles.gridColumn2} />
                </div>
                <div className={styles.chartElement}>
                    <p className={styles.mobileLabel} >Pro</p>
                    <img src={check} alt='check' width='18' height='15' className={styles.gridColumn3} />
                </div>
                <div className={styles.chartElement}>
                    <p className={styles.mobileLabel} >Business</p>
                    <img src={check} alt='check' width='18' height='15' className={styles.gridColumn4} />
                </div>
            </div>
            <hr className={styles.lineGray}/>
            <div className={styles.row}>
                <p className={`h4 ${styles.feature} ${styles.gridColumn1}`}>Embedding custom content</p>
                <div className={styles.chartElement}>
                    <p className={styles.mobileLabel}>Basic</p>
                </div>
                <div className={styles.chartElement}>
                    <p className={styles.mobileLabel} >Pro</p>
                    <img src={check} alt='check' width='18' height='15' className={styles.gridColumn3} />
                </div>
                <div className={styles.chartElement}>
                    <p className={styles.mobileLabel} >Business</p>
                    <img src={check} alt='check' width='18' height='15' className={styles.gridColumn4} />
                </div>
            </div>
            <hr className={styles.lineGray}/>

            <div className={styles.row}>
                <p className={`h4 ${styles.feature} ${styles.gridColumn1}`}>Customize metadata</p>
                <div className={styles.chartElement}>
                    <p className={styles.mobileLabel}>Basic</p>
                </div>
                <div className={styles.chartElement}>
                    <p className={styles.mobileLabel} >Pro</p>
                    <img src={check} alt='check' width='18' height='15' className={styles.gridColumn3} />
                </div>
                <div className={styles.chartElement}>
                    <p className={styles.mobileLabel} >Business</p>
                    <img src={check} alt='check' width='18' height='15' className={styles.gridColumn4} />
                </div>
            </div>
            <hr className={styles.lineGray}/>

            <div className={styles.row}>
                <p className={`h4 ${styles.feature} ${styles.gridColumn1}`}>Advanced Metrics</p>
                <div className={styles.chartElement}>
                    <p className={styles.mobileLabel}>Basic</p>
                </div>
                <div className={styles.chartElement}>
                    <p className={styles.mobileLabel} >Pro</p>
                </div>
                <div className={styles.chartElement}>
                    <p className={styles.mobileLabel} >Business</p>
                    <img src={check} alt='check' width='18' height='15' className={styles.gridColumn4} />
                </div>
            </div>
            <hr className={styles.lineGray}/>

            <div className={styles.row}>
                <p className={`h4 ${styles.feature} ${styles.gridColumn1}`}>Photo downloads</p>
                <div className={styles.chartElement}>
                    <p className={styles.mobileLabel}>Basic</p>
                </div>
                <div className={styles.chartElement}>
                    <p className={styles.mobileLabel} >Pro</p>
                </div>
                <div className={styles.chartElement}>
                    <p className={styles.mobileLabel} >Business</p>
                    <img src={check} alt='check' width='18' height='15' className={styles.gridColumn4} />
                </div>
            </div>
            <hr className={styles.lineGray}/>

            <div className={styles.row}>
                <p className={`h4 ${styles.feature} ${styles.gridColumn1}`}>Search engine indexing</p>
                <div className={styles.chartElement}>
                    <p className={styles.mobileLabel}>Basic</p>
                </div>
                <div className={styles.chartElement}>
                    <p className={styles.mobileLabel} >Pro</p>
                </div>
                <div className={styles.chartElement}>
                    <p className={styles.mobileLabel} >Business</p>
                    <img src={check} alt='check' width='18' height='15' className={styles.gridColumn4} />
                </div>
            </div>
            <hr className={styles.lineGray}/>

            <div className={styles.row}>
                <p className={`h4 ${styles.feature} ${styles.gridColumn1}`}>Custom Analytics</p>
                <div className={styles.chartElement}>
                    <p className={styles.mobileLabel}>Basic</p>
                </div>
                <div className={styles.chartElement}>
                    <p className={styles.mobileLabel} >Pro</p>
                </div>
                <div className={styles.chartElement}>
                    <p className={styles.mobileLabel} >Business</p>
                    <img src={check} alt='check' width='18' height='15' className={styles.gridColumn4} />
                </div>
            </div>
            <hr className={styles.lineGray}/>
        </div>
    </div>
  )
}

export default Compare
