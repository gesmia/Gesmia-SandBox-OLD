import React from 'react';

import { Button } from '../button/Button';
import './header.css';
import Link from 'next/link';

export const Header = (props: { hideWaitingList?: boolean }) => (
  <header>
    <div className="header">
      <div className='box'>
        <div>
          <Link href="/">
            <svg width="94" height="28" viewBox="0 0 94 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_71_113)">
                <path d="M87.3088 22.5745C85.8597 22.5745 84.6082 22.2734 83.5543 21.6711C82.5066 21.0626 81.7004 20.2032 81.136 19.0927C80.5714 17.9762 80.2891 16.6619 80.2891 15.1501C80.2891 13.6633 80.5714 12.3585 81.136 11.2356C81.7067 10.1064 82.5035 9.22812 83.5259 8.60078C84.5486 7.9672 85.7499 7.65039 87.13 7.65039C88.0208 7.65039 88.8614 7.79468 89.6519 8.08324C90.4485 8.36555 91.1513 8.80467 91.7598 9.40064C92.3745 9.99659 92.8575 10.7557 93.2088 11.6778C93.56 12.5937 93.7358 13.6853 93.7358 14.9525V15.6486C93.7358 15.841 93.5799 15.9969 93.3874 15.9969H82.237C82.0447 15.9969 81.8887 15.841 81.8887 15.6486V14.0493C81.8887 13.8569 82.0447 13.7009 82.237 13.7009H90.1189C90.3125 13.7009 90.4706 13.5427 90.4536 13.3497C90.408 12.8384 90.2725 12.3752 90.0471 11.9601C89.7711 11.4457 89.3853 11.0411 88.8896 10.7462C88.4003 10.4514 87.8295 10.304 87.177 10.304C86.4807 10.304 85.8691 10.4734 85.3421 10.8121C84.8152 11.1446 84.4042 11.5837 84.1094 12.1295C83.8208 12.669 83.6735 13.2618 83.6672 13.908V15.9123C83.6672 16.7529 83.8208 17.4743 84.1282 18.0765C84.4356 18.6725 84.8654 19.1305 85.4175 19.4505C85.9694 19.7641 86.6157 19.9209 87.3558 19.9209C87.8515 19.9209 88.3 19.8519 88.7014 19.7138C89.103 19.5696 89.4511 19.3594 89.746 19.0833C89.9781 18.8662 90.1655 18.6081 90.3082 18.309C90.3771 18.1645 90.526 18.0703 90.6852 18.0882L93.2032 18.3714C93.4111 18.3947 93.5527 18.5953 93.4893 18.7948C93.2721 19.4787 92.9245 20.0861 92.4466 20.6171C91.8883 21.2382 91.1732 21.7213 90.3012 22.0663C89.4292 22.405 88.4318 22.5745 87.3088 22.5745Z" fill="black" />
                <path d="M75.9401 22.2924C75.7477 22.2924 75.5918 22.1366 75.5918 21.9441V8.18718C75.5918 7.99481 75.7477 7.83887 75.9401 7.83887H78.6498C78.8421 7.83887 78.9981 7.99481 78.9981 8.18718V21.9441C78.9981 22.1364 78.8421 22.2924 78.6498 22.2924H75.9401Z" fill="black" />
                <path d="M60.9675 27.7123C60.7752 27.7123 60.6191 27.5563 60.6191 27.364V8.1869C60.6191 7.99454 60.7752 7.83859 60.9675 7.83859H63.6207C63.8132 7.83859 63.9691 7.99454 63.9691 8.1869V10.1066C63.9691 10.174 64.0237 10.2287 64.0913 10.2287C64.1375 10.2287 64.1796 10.2025 64.201 10.1615C64.3741 9.8299 64.6105 9.47904 64.91 9.10892C65.23 8.70744 65.6629 8.36555 66.2087 8.08324C66.7544 7.79468 67.4508 7.65039 68.2977 7.65039C69.4143 7.65039 70.4212 7.93583 71.3181 8.50669C72.2215 9.07129 72.9368 9.90876 73.4638 11.0191C73.9969 12.1232 74.2635 13.4783 74.2635 15.0842C74.2635 16.6713 74.0031 18.0201 73.4826 19.1305C72.9618 20.2408 72.253 21.0877 71.3559 21.6711C70.4589 22.2546 69.4425 22.5463 68.3071 22.5463C67.479 22.5463 66.7921 22.4082 66.2463 22.1321C65.7005 21.8561 65.2615 21.5236 64.9288 21.1347C64.6173 20.7572 64.3715 20.3996 64.1915 20.0623C64.1761 20.0332 64.1462 20.0149 64.1133 20.0149C64.0648 20.0149 64.0257 20.0543 64.0257 20.1027V27.364C64.0257 27.5563 63.8696 27.7123 63.6773 27.7123H60.9675ZM63.9597 15.0654C63.9597 16.0001 64.0915 16.8187 64.355 17.5213C64.6246 18.224 65.0105 18.7728 65.5123 19.1681C66.0205 19.557 66.6352 19.7516 67.3566 19.7516C68.1095 19.7516 68.7399 19.5508 69.2481 19.1493C69.7561 18.7415 70.1389 18.1862 70.396 17.4837C70.6595 16.7748 70.7913 15.9687 70.7913 15.0654C70.7913 14.1683 70.6626 13.3716 70.4054 12.6753C70.1483 11.9789 69.7655 11.4332 69.2575 11.038C68.7493 10.6427 68.1157 10.4451 67.3566 10.4451C66.629 10.4451 66.011 10.6365 65.5029 11.0191C64.9948 11.4018 64.6089 11.9382 64.3456 12.6282C64.0884 13.3183 63.9597 14.1307 63.9597 15.0654Z" fill="black" />
                <path d="M45.9968 27.7123C45.8043 27.7123 45.6484 27.5563 45.6484 27.364V8.1869C45.6484 7.99454 45.8043 7.83859 45.9968 7.83859H48.65C48.8425 7.83859 48.9984 7.99454 48.9984 8.1869V10.1066C48.9984 10.174 49.053 10.2287 49.1204 10.2287C49.1668 10.2287 49.2089 10.2025 49.2303 10.1615C49.4034 9.8299 49.6398 9.47904 49.9393 9.10892C50.2593 8.70744 50.6922 8.36555 51.2378 8.08324C51.7837 7.79468 52.4799 7.65039 53.3269 7.65039C54.4436 7.65039 55.4504 7.93583 56.3474 8.50669C57.2508 9.07129 57.9659 9.90876 58.4929 11.0191C59.0262 12.1232 59.2928 13.4783 59.2928 15.0842C59.2928 16.6713 59.0324 18.0201 58.5117 19.1305C57.9911 20.2408 57.2821 21.0877 56.3851 21.6711C55.488 22.2546 54.4718 22.5463 53.3363 22.5463C52.5083 22.5463 51.8213 22.4082 51.2755 22.1321C50.7298 21.8561 50.2906 21.5236 49.9581 21.1347C49.6466 20.7572 49.4007 20.3996 49.2208 20.0623C49.2054 20.0332 49.1753 20.0149 49.1426 20.0149C49.0941 20.0149 49.0548 20.0543 49.0548 20.1027V27.364C49.0548 27.5563 48.8989 27.7123 48.7065 27.7123H45.9968ZM48.9889 15.0654C48.9889 16.0001 49.1206 16.8187 49.3841 17.5213C49.6539 18.224 50.0396 18.7728 50.5416 19.1681C51.0497 19.557 51.6645 19.7516 52.3859 19.7516C53.1388 19.7516 53.7692 19.5508 54.2772 19.1493C54.7854 18.7415 55.1681 18.1862 55.4253 17.4837C55.6888 16.7748 55.8204 15.9687 55.8204 15.0654C55.8204 14.1683 55.6919 13.3716 55.4347 12.6753C55.1775 11.9789 54.7948 11.4332 54.2866 11.038C53.7786 10.6427 53.145 10.4451 52.3859 10.4451C51.6583 10.4451 51.0403 10.6365 50.5322 11.0191C50.024 11.4018 49.6382 11.9382 49.3747 12.6282C49.1175 13.3183 48.9889 14.1307 48.9889 15.0654Z" fill="black" />
                <path d="M36.1824 22.5839C35.2665 22.5839 34.4415 22.4207 33.7076 22.0945C32.9798 21.762 32.4027 21.2728 31.9762 20.6265C31.5559 19.9804 31.3457 19.1838 31.3457 18.2366C31.3457 17.421 31.4962 16.7466 31.7973 16.2134C32.0984 15.6802 32.5094 15.2536 33.03 14.9336C33.5507 14.6137 34.1373 14.3722 34.7897 14.2091C35.4483 14.0397 36.1291 13.9174 36.8317 13.8421C37.6786 13.7543 38.3655 13.6759 38.8925 13.6068C39.4193 13.5316 39.8021 13.4187 40.0403 13.2681C40.285 13.1113 40.4075 12.8697 40.4075 12.5435V12.4871C40.4075 11.7782 40.1972 11.2293 39.777 10.8403C39.3566 10.4514 38.7512 10.2569 37.9609 10.2569C37.1265 10.2569 36.4647 10.4389 35.9753 10.8027C35.581 11.0997 35.2912 11.4406 35.1059 11.8253C35.0335 11.976 34.8769 12.0748 34.7113 12.0513L32.212 11.6964C32.0028 11.6667 31.8671 11.4585 31.9384 11.2596C32.1933 10.5478 32.5665 9.94066 33.0584 9.43827C33.6353 8.84231 34.3412 8.39692 35.1754 8.10207C36.0098 7.80095 36.932 7.65039 37.9421 7.65039C38.6384 7.65039 39.3315 7.73195 40.0215 7.89505C40.7117 8.05816 41.3422 8.32792 41.913 8.7043C42.4838 9.07442 42.9418 9.57943 43.2868 10.2193C43.6381 10.8592 43.8138 11.659 43.8138 12.6188V21.9439C43.8138 22.1361 43.6578 22.2922 43.4655 22.2922H40.8874C40.6952 22.2922 40.5391 22.1361 40.5391 21.9439V20.3768C40.5391 20.3381 40.5078 20.3066 40.4689 20.3066C40.4426 20.3066 40.4188 20.3214 40.4064 20.3446C40.2007 20.7319 39.9156 21.0957 39.5511 21.4358C39.181 21.7809 38.7136 22.06 38.149 22.2734C37.5906 22.4804 36.9351 22.5839 36.1824 22.5839ZM37.0669 20.0809C37.7507 20.0809 38.3435 19.9459 38.8454 19.6762C39.3472 19.4001 39.7329 19.0363 40.0027 18.5847C40.2788 18.133 40.4169 17.6406 40.4169 17.1073V16.0058C40.4169 15.7658 40.1013 15.5814 39.8711 15.6488C39.6201 15.7241 39.3378 15.7899 39.0241 15.8464C38.7105 15.9029 38.3999 15.953 38.0926 15.9969C37.7852 16.0409 37.5185 16.0785 37.2927 16.1099C36.7846 16.1789 36.3297 16.2918 35.9283 16.4486C35.5269 16.6055 35.2101 16.825 34.9779 17.1073C34.7458 17.3833 34.6298 17.7409 34.6298 18.18C34.6298 18.8073 34.8586 19.281 35.3167 19.6009C35.7745 19.9209 36.3579 20.0809 37.0669 20.0809Z" fill="black" />
                <path d="M20.7677 13.8231V21.9436C20.7677 22.1361 20.6118 22.2919 20.4194 22.2919H17.7096C17.5173 22.2919 17.3613 22.1361 17.3613 21.9436V3.36882C17.3613 3.17645 17.5173 3.02051 17.7096 3.02051H20.3442C20.5364 3.02051 20.6925 3.17645 20.6925 3.36882V10.1928C20.6925 10.2489 20.7379 10.2943 20.794 10.2943C20.8351 10.2943 20.872 10.2696 20.8882 10.2319C21.2277 9.44592 21.7426 8.82373 22.4332 8.36533C23.1484 7.88855 24.0581 7.65017 25.162 7.65017C26.1659 7.65017 27.041 7.86032 27.7875 8.28063C28.5339 8.70094 29.1111 9.31572 29.5189 10.125C29.9329 10.9342 30.14 11.9222 30.14 13.0891V21.9436C30.14 22.1361 29.9839 22.2919 29.7917 22.2919H27.082C26.8895 22.2919 26.7336 22.1361 26.7336 21.9436V13.616C26.7336 12.6437 26.4827 11.8877 25.9808 11.3482C25.4851 10.8025 24.7888 10.5296 23.8917 10.5296C23.2895 10.5296 22.75 10.6613 22.2733 10.9248C21.8027 11.182 21.4326 11.5553 21.1629 12.0446C20.8994 12.5339 20.7677 13.1267 20.7677 13.8231Z" fill="black" />
                <path d="M1.11003 5.94698C0.917665 5.94698 0.761719 5.79104 0.761719 5.59866V3.36882C0.761719 3.17645 0.917664 3.02051 1.11003 3.02051H15.7891C15.9815 3.02051 16.1375 3.17645 16.1375 3.36882V5.59866C16.1375 5.79104 15.9815 5.94698 15.7891 5.94698H10.5293C10.337 5.94698 10.181 6.10292 10.181 6.29529V21.9436C10.181 22.1361 10.0251 22.2919 9.83269 22.2919H7.06649C6.87412 22.2919 6.71818 22.1361 6.71818 21.9436V6.29529C6.71818 6.10294 6.56222 5.94698 6.36986 5.94698H1.11003Z" fill="black" />
                <path d="M79.3341 1.13473C80.514 1.81593 80.882 2.99289 80.2564 4.07658C79.9481 4.61042 79.4203 5.01388 79.0479 5.27226C78.3731 5.74034 77.4427 6.14637 76.6332 6.53317C76.4789 6.60416 76.3297 6.60703 76.2135 6.5399C76.1 6.47439 76.0251 6.34216 76.0094 6.17293C75.9396 5.27849 75.826 4.26986 75.8939 3.45136C75.9345 3.00139 76.0171 2.34084 76.3253 1.807C76.9509 0.723298 78.1541 0.453528 79.3341 1.13473Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_71_113">
                  <rect width="93" height="27.8652" fill="white" transform="translate(0.75)" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
        <div>
          {!props?.hideWaitingList &&
            <Button size="large" label="Unirme" />
          }
        </div>
      </div>
    </div>
  </header>
);
