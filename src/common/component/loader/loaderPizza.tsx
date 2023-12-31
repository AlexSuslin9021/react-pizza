import React from "react"
import ContentLoader from "react-content-loader"



export const LoaderPizza: React.FC<MyLoaderProps> = () => (
<div>
    <ContentLoader
        speed={2}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"

    >
        <circle cx="150" cy="137" r="125" />
        <rect x="42" y="279" rx="0" ry="0" width="221" height="38" />
        <rect x="17" y="335" rx="0" ry="0" width="280" height="85" />
        <rect x="136" y="375" rx="0" ry="0" width="14" height="0" />
        <rect x="19" y="439" rx="0" ry="0" width="77" height="28" />
        <rect x="192" y="439" rx="16" ry="16" width="107" height="28" />
        <rect x="269" y="457" rx="0" ry="0" width="21" height="2" />
    </ContentLoader>
</div>
)
interface MyLoaderProps {
    speed?: number;
    width?: number;
    height?: number;
    viewBox?: string;
    backgroundColor?: string;
    foregroundColor?: string;
}