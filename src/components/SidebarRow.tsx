type SidebarRowProps = {
  icon: React.FC<React.ComponentProps<'svg'>>;
  title: string;
};

export default function SidebarRow({ icon: Icon, title }: SidebarRowProps) {
  return (
    <div className="group">
      <div className=" flex max-w-fit cursor-pointer items-center gap-x-2 rounded-full px-4 py-3 transition duration-200 group-hover:bg-gray-100">
        <Icon className="h-6 w-6" />
        <p className="group-hover:text-twitter">{title}</p>
      </div>
    </div>
  );
}
