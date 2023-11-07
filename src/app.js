// const { data } = require("cheerio/lib/api/attributes")

const feedDisplay = document.querySelector('#feed')

// 'http://localhost:9000/jobs'

fetch('http://localhost:9000')
    .then(res => res.json())
    .then(data => {
       showSpinner()
        data.forEach(job => {
            showSpinner()
            const shortJobTitle = job.title.split(' ').slice(0,5).join(' ')

            const splittedCompanyName = job.title.toLowerCase().split('at')
            const companyName = splittedCompanyName[splittedCompanyName.length - 1]
            // console.log(companyName[companyName.length - 1])


            const datePosted = job.datePosted.split('-')
        
            
            const allJobs = `
            <div>
                <div>
                    <div class="job-item">
                        <div class="position job-details">
                            <p class="job-detail-title">Position</p>
                            <div class="job-subtitle-section">
                                <p class="job-detail-subtitle text-content">${shortJobTitle}</p>
                                
                            </div>
                        </div>
                        <div class="company job-details">
                            <p class="job-detail-title">Company</p>
                            <p class="job-detail-subtitle text-content">${companyName}</p>
                        </div>
                       
                        <div class="date-posted job-details">
                            <p class="job-detail-title">Date posted</p>
                            <p class="job-detail-subtitle">${datePosted[0]}</p>
                        </div>
                        <a href="${job.url}" target="_blank"><div class="btn-bg">
                            <div class="apply-now-btn">
                                <p class="btn-text">Apply Now</p>
                                <span class="apply-link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                            <g clip-path="url(#clip0_2_30)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.671 3.3493L6.707 4.3133C6.5184 4.49546 6.2658 4.59626 6.0036 4.59398C5.7414 4.5917 5.49059 4.48653 5.30518 4.30112C5.11977 4.11571 5.0146 3.8649 5.01233 3.6027C5.01005 3.34051 5.11084 3.0879 5.293 2.8993L6.257 1.9343C7.10768 1.08362 8.26145 0.605713 9.4645 0.605713C10.6675 0.605713 11.8213 1.08362 12.672 1.9343C13.5227 2.78498 14.0006 3.93876 14.0006 5.1418C14.0006 6.34485 13.5227 7.49862 12.672 8.3493L11.707 9.3133C11.6148 9.40881 11.5044 9.48499 11.3824 9.5374C11.2604 9.58981 11.1292 9.6174 10.9964 9.61855C10.8636 9.61971 10.7319 9.59441 10.609 9.54412C10.4861 9.49384 10.3745 9.41959 10.2806 9.3257C10.1867 9.2318 10.1125 9.12015 10.0622 8.99726C10.0119 8.87436 9.9866 8.74268 9.98775 8.6099C9.9889 8.47712 10.0165 8.3459 10.0689 8.2239C10.1213 8.10189 10.1975 7.99155 10.293 7.8993L11.257 6.9343C11.7103 6.45446 11.9587 5.81677 11.9493 5.15671C11.94 4.49665 11.6736 3.86627 11.2068 3.39949C10.74 2.93271 10.1096 2.66634 9.44959 2.65697C8.78954 2.6476 8.15184 2.89597 7.672 3.3493H7.671ZM3.707 5.8993C3.89447 6.08683 3.99979 6.34114 3.99979 6.6063C3.99979 6.87147 3.89447 7.12577 3.707 7.3133L2.743 8.2783C2.28966 8.75814 2.04129 9.39584 2.05066 10.0559C2.06004 10.716 2.32641 11.3463 2.79319 11.8131C3.25996 12.2799 3.89035 12.5463 4.55041 12.5556C5.21046 12.565 5.84816 12.3166 6.328 11.8633L7.293 10.8993C7.4816 10.7171 7.7342 10.6164 7.9964 10.6186C8.2586 10.6209 8.50941 10.7261 8.69482 10.9115C8.88023 11.0969 8.9854 11.3477 8.98767 11.6099C8.98995 11.8721 8.88916 12.1247 8.707 12.3133L7.743 13.2773C6.88933 14.1129 5.74051 14.578 4.54598 14.5717C3.35144 14.5653 2.20763 14.088 1.36288 13.2434C0.518143 12.3988 0.0406703 11.2551 0.0341389 10.0605C0.0276074 8.86599 0.492544 7.7171 1.328 6.8633L2.293 5.8993C2.48053 5.71183 2.73484 5.60652 3 5.60652C3.26516 5.60652 3.51947 5.71183 3.707 5.8993ZM9.207 6.8133C9.38916 6.6247 9.48995 6.3721 9.48767 6.1099C9.4854 5.8477 9.38023 5.59689 9.19482 5.41148C9.00941 5.22608 8.7586 5.12091 8.4964 5.11863C8.2342 5.11635 7.9816 5.21714 7.793 5.3993L4.793 8.3993C4.61084 8.5879 4.51005 8.84051 4.51233 9.1027C4.5146 9.3649 4.61977 9.61571 4.80518 9.80112C4.99059 9.98653 5.2414 10.0917 5.5036 10.094C5.7658 10.0963 6.0184 9.99546 6.207 9.8133L9.207 6.8133Z" fill="#7E7E7E"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2_30">
                                                <rect width="14" height="14" fill="white" transform="translate(0 0.606201)"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                </span>
                            </div>
                            
                        </div></a>
                    </div>
                    <div class="description-section">
                       
                        <div class="separator">
                            <svg  xmlns="http://www.w3.org/2000/svg" width="1321" height="2" viewBox="0 0 1401 2" fill="none">
                                <path d="M0 0.606201H1401" stroke="#333333"/>
                            </svg>
                        </div>
                    </div>
                </div>
            
            `
            feedDisplay.insertAdjacentHTML("beforeend", allJobs)
            hideSpinner()
        })
    })
    .catch(err => console.log(err))


    // show spinner
function showSpinner(){
    document.querySelector('.spinner').classList.add('show')
}

// hide spinner
function hideSpinner(){
    document.querySelector('.spinner').classList.remove('show')
}

