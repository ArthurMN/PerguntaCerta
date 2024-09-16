import {
    MapPin,
    Contact,
    House,
    FileBadge,
    Users,
    RefreshCcw,
    FolderSync,
    MapPinned,
    Plus,
    ChevronDown,
    Pencil,
    Package,
    CalendarDays,
    Briefcase,
    Wallet,
    Tag,
    Hash,
    HandCoins,
    NotepadText,
    ChevronRight,
    FilePlus,
    FileText,
    ArrowRightLeft,
    Check,
    List,
    ShoppingCart,
    MapPinOff,
    UserX,
    PencilOff,
    Save,
    SquareUserRound,
    X,
    ClipboardCheck,
    FileWarning,
    EllipsisVertical,
    ChevronLeft,
    Search,
    UserPlus,
    Trash2,
    ArrowRight,
    ArrowDown,
    Milestone,
    User,
    FileQuestion,
    Footprints,
    Building,
    LockKeyhole,
    CircleCheck,
    Circle,
    Delete,
    CircleAlert,
    CircleDot,
    Dot,
    MapPinPlus,
    Library,
    Trophy,
    Divide,
    Percent,
    Globe,
    Earth,
    ScrollText,
    ALargeSmall,
    Cuboid,
} from "lucide-react-native";
import { ViewStyle } from "react-native";
import classNames from "./classNames";

type IconName =
  | 'file-question'
  | 'map-pin'
  | 'contact'
  | 'house'
  | 'file-badge'
  | 'users'
  | 'refresh-ccw'
  | 'folder-sync'
  | 'map-pinned'
  | 'plus'
  | 'chevron-down'
  | 'pencil'
  | 'package'
  | 'calendar-days'
  | 'briefcase'
  | 'wallet'
  | 'tag'
  | 'hash'
  | 'hand-coins'
  | 'notepad-text'
  | 'chevron-right'
  | 'file-plus'
  | 'file-text'
  | 'arrow-right-left'
  | 'check'
  | 'list'
  | 'shopping-cart'
  | 'map-pin-off'
  | 'user-x'
  | 'pencil-off'
  | 'save'
  | 'square-user-round'
  | 'x'
  | 'clipboard-check'
  | 'file-warning'
  | 'ellipsis-vertical'
  | 'chevron-left'
  | 'search'
  | 'user-plus'
  | 'trash'
  | 'arrow-right'
  | 'arrow-down'
  | 'milestone'
  | 'user'
  | 'lock-key-hole'
  | 'circle-alert'
  | 'circle-check'
  | 'map-pin-plus'

type Props = {
    name?: IconName | string,
    size?: number,
    color?: string,
    opacity?: number,
    className?: string,
    style?: ViewStyle,
}

const icons = {
    'file-question': FileQuestion,
    'map-pin': MapPin,
    'contact': Contact,
    'house': House,
    'file-badge': FileBadge,
    'users': Users,
    'refresh-ccw': RefreshCcw,
    'folder-sync': FolderSync,
    'map-pinned': MapPinned,
    'plus': Plus,
    'chevron-down': ChevronDown,
    'pencil': Pencil,
    'package': Package,
    'calendar-days': CalendarDays,
    'briefcase': Briefcase,
    'wallet': Wallet,
    'tag': Tag,
    'hash': Hash,
    'hand-coins': HandCoins,
    'notepad-text': NotepadText,
    'chevron-right': ChevronRight,
    'file-plus': FilePlus,
    'file-text': FileText,
    'arrow-right-left': ArrowRightLeft,
    'check': Check,
    'list': List,
    'shopping-cart': ShoppingCart,
    'map-pin-off': MapPinOff,
    'user-x': UserX,
    'pencil-off': PencilOff,
    'save': Save,
    'square-user-round': SquareUserRound,
    'x': X,
    'clipboard-check': ClipboardCheck,
    'file-warning': FileWarning,
    'ellipsis-vertical': EllipsisVertical,
    'chevron-left': ChevronLeft,
    'search': Search,
    'user-plus': UserPlus,
    'trash': Trash2,
    'arrow-right': ArrowRight,
    'arrow-down': ArrowDown,
    'milestone': Milestone,
    'user': User,
    'footprints': Footprints,
    'building': Building,
    'lock-key-hole': LockKeyhole,
    'circle-check': CircleCheck,
    'circle': Circle,
    'delete': Delete,
    'circle-alert': CircleAlert,
    'circle-dot': CircleDot,
    'dot': Dot,
    'map-pin-plus': MapPinPlus,
    'library': Library,
    'trophy': Trophy,
    'percent': Percent,
    'earth': Earth,
    'scroll-text': ScrollText,
    'a-large-small': ALargeSmall,
    'cuboid': Cuboid,
  };


const LucideIcons = ({ name='file-question', size = 24, color = "black", opacity = 1, className, style }: Props) => {
    const IconComponent = icons[name as keyof typeof icons] || FileQuestion;

    return (
        <IconComponent
            className={classNames('flex-shrink', className)}
            style={style}
            size={size}
            color={color}
            opacity={opacity}
        />
    )
};


export default LucideIcons;