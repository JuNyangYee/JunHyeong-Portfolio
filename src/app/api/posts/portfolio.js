const Page = {
    info: {
        title: "Portfolio Page Dev",
        date: "2024. 10. 03 ~ 2024. 11. 21 (페이지 형태 제작)\n2024. 11. 30 ~ 현재 (관리 / 배포 중)",
        about: "기획, 개발, 디자인 모두 직접 작업하여\nNext.js 기반의 포트폴리오 웹 사이트를 제작했습니다.",
        thumbnail: "/images/works/Portfolio/Portfolio_Thumbnail.png",
        tags: ["Tech", "Web", "Next.js"],
        fab_github: true,
        fab_github_url: "https://github.com/JuNyangYee/JunHyeong-Portfolio",
        fab_blog: true,
        fab_blog_url: "https://junyangyee.github.io/posts/PORTFOLIO",
        fab_video: false,
        fab_video_url: "",
        fab_link: true,
        fab_link_url: "https://junyangyee.vercel.app/",
    },

    imgData: [
        {
            index: 1,
            title: "메인 페이지",
            url: "/images/works/Portfolio/Portfolio_Thumbnail.png",
            alt: "Main Page"
        },
        {
            index: 2,
            title: "프로필 페이지 01",
            url: "/images/works/Portfolio/Portfolio_Profile.png",
            alt: "Profile Page 01"
        },
        {
            index: 3,
            title: "프로필 페이지 02",
            url: "/images/works/Portfolio/Portfolio_Profile02.png",
            alt: "Profile Page 02"
        },
        {
            index: 4,
            title: "작업물 페이지",
            url: "/images/works/Portfolio/Portfolio_Works.png",
            alt: "Works Page"
        },
        {
            index: 5,
            title: "작업물 모달창",
            url: "/images/works/Portfolio/Portfolio_Works_Modal.png",
            alt: "Works Modal Page"
        },
        {
            index: 6,
            title: "컨텍 페이지",
            url: "/images/works/Portfolio/Portfolio_Contact.png",
            alt: "Contact Page"
        },
    ],

    contents: (
        <div>
            <h3>주요 특징</h3>
            <ul>
                <li><p>
                    원 페이지 스크롤 형태의 웹 페이지
                </p></li>
                
                <li><p>
                    상단바, FAB 등 다양한 컨텍 요소
                </p></li>

                <li><p>
                    작업물 "자세히보기"를 통해 작업에 대한 디테일한 정보 확인 가능
                </p></li>
            </ul>

            <hr />

            <h3>작업 과정</h3>
            <p><a href="https://junyangyee.github.io/posts/PORTFOLIO" style={{backgroundColor: "#0000001a", paddingLeft: 12 + 'px', paddingRight: 12 + 'px', borderBottom: 'none'}}>개발 일지</a> 를 통해 자세한 작업 과정을 확인하실 수 있습니다.</p>

        </div>
    )
}

export default Page;

// export default function Test() {
//     return (
//         <Modal
//             info={Page.info}
//             contents={Page.contents}
//             imgData={Page.imgData}
//         />
//     );
// };