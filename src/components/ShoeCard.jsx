const ShoeCard = ({ img, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
        if (bigShoeImg !== img.bigShoe) {
            changeBigShoeImage(img.bigShoe);
        }
    };

    return (
        <div
            className={`border-2 rounded-xl ${bigShoeImg === img.bigShoe
                ? "border-coral-red"
                : "border-transparent"
                } cursor-pointer max-sm:flex-1`}
                //加外誆功能
            onClick={handleClick}
        >
            <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
                <img
                    //thumbnail = assets/images/thumbnail-shoe*.svg
                    src={img.thumbnail}
                    alt='shoe colletion'
                    width={127}
                    height={103.34}
                    className='object-contain'
                />
            </div>
        </div>
    );
};

export default ShoeCard;
