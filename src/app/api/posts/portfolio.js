const Page = {
    info: {
        title: "포트폴리오 사이트 개발",
        date: "2024. 10. 03 ~ 2024. 11. 21 (페이지 형태 제작)\n2024. 11. 30 ~ 현재 (업데이트 중)",
        about: "Next.Js를 활용한 개인 포트폴리오 사이트 제작을 진행했습니다. ",
        thumbnail: "/images/works/Portfolio/Portfolio_Thumbnail.png",
        tags: ["Web", "Next.js", "Figma"],
        fab_github: true,
        fab_github_url: "https://github.com/JuNyangYee/JunHyeong-Portfolio",
        fab_blog: true,
        fab_blog_url: "https://junyangyee.notion.site/portfolio-devlog?pvs=4",
        fab_video: false,
        fab_video_url: "",
        fab_link: true,
        fab_link_url: "https://junyangyee.vercel.app/",
    },

    imgData: [
        {
            index: 1,
            title: "메인 페이지",
            url: "/images/works/Portfolio/Portfolio_001_Main.png",
            alt: "Main Page"
        },
        {
            index: 2,
            title: "프로필 페이지 01",
            url: "/images/works/Portfolio/Portfolio_002_Profile.png",
            alt: "Profile Page 01"
        },
        {
            index: 3,
            title: "프로필 페이지 02",
            url: "/images/works/Portfolio/Portfolio_003_Profile.png",
            alt: "Profile Page 02"
        },
        {
            index: 4,
            title: "작업물 페이지",
            url: "/images/works/Portfolio/Portfolio_004_Works.png",
            alt: "Works Page"
        },
        {
            index: 5,
            title: "작업물 모달창",
            url: "/images/works/Portfolio/Portfolio_005_Works_Modal.png",
            alt: "Works Modal Page"
        },
        {
            index: 6,
            title: "컨텍 페이지",
            url: "/images/works/Portfolio/Portfolio_006_Contact.png",
            alt: "Contact Page"
        },
    ],

    contents: (
        <div>
            <h3>소개</h3>
            <p>
                개인 작업물 업로드 및 공유를 위한 포트폴리오 사이트를 제작한 작업입니다.<br />
                사이트 제작 시작부터 끝까지 모두 직접 개발하기 위해 노력했습니다.
            </p>
            <h4>왜 Next.js로 직접 개발했는지?</h4>
            <p>
                노션 페이지와 템플릿 등 다양한 선택지가 존재하였으나,<br />
                <strong>원하는 입맛대로 커스텀할 수 있다</strong>는 장점이 있어 직접 페이지를 개발하고자 하였습니다.<br />
                특히 노션 페이지의 경우, 정해진 레이아웃과 템플릿 디자인에 한계가 있어 선택하지 않았습니다.
            </p>
            <p>
                또한 비록 템플릿을 사용한 것이긴 하나, <br />
                Gatsby 블로그를 운영했던 적이 있어 (현재 다시 운영 중) 한 번쯤 웹 페이지 제작에 도전해보고 싶었습니다.
            </p>
            <hr />
            <h3>작업을 진행하면서</h3>
            <p>
                기존에 HTML, CSS를 찾아보면서 조금씩 만져보기도 했고 p5js 와 같은 자바스크립트 문법 역시 사용해보았으나, 이렇게 본격적으로 웹 개발을 진행해본 적이 없어 어려움이 많았습니다.<br />
                특히 React 문법과 파일관리(폴더구조)와 같은 부분에서 어려움이 있어 중간에 막히는 부분이 많았습니다.
            </p>
            <p>
                <strong>작업과정</strong><br />
                우측 블로그의 개발 일지를 통해 전체적인 작업 과정을 확인해보실 수 있습니다 :)
            </p>
            <hr />
            <h3>사용 기술 및 프로그램</h3>
            <ul>
                <li><strong>Next.js</strong><br />
                    JavaScript와 기본 css 기반으로 사이트 전체를 제작하였습니다.
                </li>
                <li><strong>Figma</strong><br />
                    사이트의 전체적인 부분부터 세부적인 부분까지 모두 Figma를 이용하여 디자인했습니다.
                </li>
            </ul>
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