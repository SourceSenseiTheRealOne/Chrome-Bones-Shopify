import Link from "next/link";
import Image from "next/image";
import { formatter } from "../../utils/helper";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Rating,
} from "@material-tailwind/react";

export function DefaultRating() {
  return <Rating value={5} />;
}

const ProductCard = ({ product }) => {
  const { handle, title } = product.node;

  const { altText, originalSrc } = product.node.images.edges[0].node;

  const price = product.node.priceRange.minVariantPrice.amount;

  return (
    <Link href={`/products/${handle}`}>
      <Card className="group">
        <CardBody>
          <div className="w-full bg-gray-200 rounded-xl overflow-hidden">
            <div className="relative group-hover:opacity-75 h-72">
              <Image
                src={originalSrc}
                alt={altText}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <h3 className="mt-4 ml-1 text-lg font-medium text-gray-900">
            {title}
          </h3>
          <div className="flex flex-col gap-4 mt-2 mb-3">
            <Rating unratedColor="amber" ratedColor="amber" value={5} />
          </div>
          <div className="mt-1 ml-1 text-sm text-gray-700">
            {formatter.format(price)}
          </div>
          <div className="mt-4 ">
            <Button>Info</Button>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ProductCard;
