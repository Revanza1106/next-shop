import { NextRequest, NextResponse } from "next/server";


const data = [
    {
        id: 1,
        title: "sport-wear",
        price: 100,
        rating: "3.6",
        image:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e08e8cb7-4009-48de-bff6-32742ff06ca7/sportswear-t-shirt-MV5kVX.png",
    },
    {
        id: 2,
        title: "nike sport-wear",
        price: 900,
        rating: "5.6",
        image:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3b1f94a8-cad9-4037-8157-4aadea995e8c/sportswear-club-sleeveless-cropped-top-GqxWKs.png",
    },
    {
        id: 3,
        title: "primary",
        price: 600,
        rating: "4.6",
        image:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/150a6d22-3af2-4de3-97a4-35522d4056ee/primary-dri-fit-short-sleeve-running-top-JNwbwK.png",
    },
]

export async function GET(request: NextResponse) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
        const detailProduct = data.find((item) => item.id === Number(id));
        if (detailProduct) {
            return NextResponse.json({
                json: 200,
                message: "success",
                data: detailProduct,
            });
        }
        return NextResponse.json({
            json: 404,
            message: "error",
            data: {},
        });
    }
    return NextResponse.json({ json: 200, message: "success", data: data });
}