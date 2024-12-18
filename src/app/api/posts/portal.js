const Page = {
    info: {
        title: "Portal System",
        date: "2021. 04",
        about: "언리얼엔진에서 사용 가능한 포탈 시스템을 제작하였습니다.",
        thumbnail: "/images/works/Portal/Portal_Thumbnail.png",
        tags: ["Unreal Engine", "Tech", "Dev"],
        fab_github: false,
        fab_github_url: "",
        fab_blog: false,
        fab_blog_url: "",
        fab_video: false,
        fab_video_url: "",
        fab_link: false,
        fab_link_url: "",
    },

    imgData: [
        {
            index: 1,
            title: "썸네일",
            url: "/images/works/Portal/Portal_Thumbnail.png",
            alt: "Thumbnail"
        },
    ],

    contents: (
        <div>
            <h3>소개</h3>
            <p>
                언리얼엔진에서 제작한 건너편을 볼 수 있는 포탈 시스템입니다.<br />
                블루프린트 기반으로 제작했습니다.
            </p>

            <hr />

            <h3>주요 작업 내용</h3>

            <ul>
                <li><strong>Scenecaptrue</strong><br />
                    기존 작업자가 작업한 내용들을 정리하면서 지저분한 블루프린트 클래스도 새롭게 제작하여 관리하였습니다.
                </li>
            </ul>

            <hr />

            <h3>여담</h3>

            <p>
                작업 목록에 있는 <em><strong>WAY: A NEW MOMENT</strong></em> 프로젝트에서 사용하려 했던 시스템입니다. <br />
                아쉽게도 사용되지 못했지만, 추후 이 기능을 활용해서 건너편을 바라보거나 순간이동 하는 시스템이 필요할 때 도움이 될 것 같습니다.
            </p>

            <hr />

            <h3>사용 기술 및 프로그램</h3>
            <ul>
                <li><strong>Unreal Engine 4.26</strong><br />
                    전체 시스템은 블루프린트 기반으로 작업되었습니다.
                </li>
            </ul>
        </div>
    )
}

export default Page;